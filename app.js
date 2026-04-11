import {
  STRINGS, DIMENSIONS, DIM_ORDER, DIM_EXPLANATIONS,
  QUESTIONS, TYPE_LIBRARY, TYPE_PATTERNS, FALLBACK_TYPE
} from './i18n.js';

// ============================================================
//  State
// ============================================================

const state = {
  lang: localStorage.getItem('bbti-lang') || 'en',
  answers: {},
  shuffledQuestions: [],
};

function t(key) { return STRINGS[state.lang][key]; }
function dims()  { return DIMENSIONS[state.lang]; }
function qs()    { return QUESTIONS[state.lang]; }
function types() { return TYPE_LIBRARY[state.lang]; }

// ============================================================
//  DOM refs
// ============================================================

const $ = (sel) => document.querySelector(sel);

const screens = {
  intro:  $('#intro'),
  test:   $('#test'),
  result: $('#result'),
};

const langToggle    = $('#langToggle');
const startBtn      = $('#startBtn');
const backIntroBtn  = $('#backIntroBtn');
const submitBtn     = $('#submitBtn');
const restartBtn    = $('#restartBtn');
const toTopBtn      = $('#toTopBtn');
const questionList  = $('#questionList');
const progressBar   = $('#progressBar');
const progressText  = $('#progressText');
const quizHint      = $('#quizHint');

// ============================================================
//  Screen management
// ============================================================

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle('active', key === name);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
//  Shuffle utility
// ============================================================

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
//  i18n: apply all static text
// ============================================================

function applyStaticText() {
  langToggle.textContent           = t('lang_toggle');
  $('#eyebrow').textContent         = t('site_title');
  $('#heroHeading').textContent     = t('hero_heading');
  $('#heroSub').textContent         = t('hero_sub');
  $('#statQNum').textContent        = t('stat_questions');
  $('#statQLabel').textContent      = t('stat_questions_label');
  $('#statTNum').textContent        = t('stat_types');
  $('#statTLabel').textContent      = t('stat_types_label');
  $('#statDNum').textContent        = t('stat_dims');
  $('#statDLabel').textContent      = t('stat_dims_label');
  startBtn.textContent             = t('start_btn');
  $('#previewHeading').textContent  = t('preview_heading');
  backIntroBtn.textContent         = t('back_btn');
  submitBtn.textContent            = t('submit_btn');
  restartBtn.textContent           = t('restart_btn');
  toTopBtn.textContent             = t('home_btn');
  document.title = t('site_title') + ' — Basketball Behavioral Type Indicator';
}

// ============================================================
//  Landing page: preview cards
// ============================================================

function renderPreviews() {
  const grid = $('#previewGrid');
  const lib = types();
  const previewCodes = ['KOBE', 'BRICK', 'CHEF', 'DAWG', 'HUGG', 'DIME'];
  grid.innerHTML = previewCodes.map(code => {
    const tp = lib[code];
    return `<div class="preview-card">
      <div class="code">${tp.code}</div>
      <div class="pname">${tp.name}</div>
    </div>`;
  }).join('');
}

// ============================================================
//  Quiz rendering
// ============================================================

function startQuiz() {
  state.answers = {};
  state.shuffledQuestions = shuffle(qs());
  renderQuestions();
  showScreen('test');
}

function renderQuestions() {
  const questions = state.shuffledQuestions;
  const qLabel = t('q_label');
  const dimHidden = t('dim_hidden');
  const isZh = state.lang === 'zh';

  questionList.innerHTML = '';
  questions.forEach((q, idx) => {
    const card = document.createElement('article');
    card.className = 'question';
    card.style.animationDelay = `${Math.min(idx * 0.03, 0.6)}s`;

    const num = isZh ? `${qLabel} ${idx + 1} 题` : `${qLabel}${idx + 1}`;
    card.innerHTML = `
      <div class="question-meta">
        <span>${num}</span>
        <span class="badge">${dimHidden}</span>
      </div>
      <div class="question-title">${q.text}</div>
      <div class="options">
        ${q.options.map((opt, i) => {
          const code = ['A', 'B', 'C', 'D'][i];
          const checked = state.answers[q.id] === opt.value ? 'checked' : '';
          const selected = state.answers[q.id] === opt.value ? ' selected' : '';
          return `<label class="option${selected}">
            <input type="radio" name="${q.id}" value="${opt.value}" ${checked}>
            <span class="option-code">${code}</span>
            <span class="option-label">${opt.label}</span>
          </label>`;
        }).join('')}
      </div>
    `;
    questionList.appendChild(card);
  });

  questionList.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', (e) => {
      state.answers[e.target.name] = Number(e.target.value);
      const label = e.target.closest('.options');
      label.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      e.target.closest('.option').classList.add('selected');
      updateProgress();
    });
  });

  updateProgress();
}

function updateProgress() {
  const total = state.shuffledQuestions.length;
  const done = state.shuffledQuestions.filter(q => state.answers[q.id] !== undefined).length;
  const pct = total ? (done / total) * 100 : 0;
  progressBar.style.width = `${pct}%`;
  progressText.textContent = `${done}${t('progress_of')}${total}`;
  const complete = done === total && total > 0;
  submitBtn.disabled = !complete;
  quizHint.textContent = complete ? t('quiz_hint_complete') : t('quiz_hint_incomplete');
}

// ============================================================
//  Scoring algorithm
// ============================================================

function sumToLevel(score) {
  if (score <= 8)  return 'L';
  if (score <= 11) return 'M';
  return 'H';
}

function levelNum(level) {
  return { L: 1, M: 2, H: 3 }[level];
}

function parsePattern(pattern) {
  return pattern.split('');
}

function computeResult() {
  const rawScores = {};
  DIM_ORDER.forEach(d => { rawScores[d] = 0; });

  const baseQuestions = QUESTIONS.en;
  baseQuestions.forEach(q => {
    rawScores[q.dim] += Number(state.answers[q.id] || 0);
  });

  const levels = {};
  Object.entries(rawScores).forEach(([dim, score]) => {
    levels[dim] = sumToLevel(score);
  });

  const userVector = DIM_ORDER.map(d => levelNum(levels[d]));

  const ranked = TYPE_PATTERNS.map(tp => {
    const vec = parsePattern(tp.pattern).map(levelNum);
    let distance = 0;
    let exact = 0;
    for (let i = 0; i < vec.length; i++) {
      const diff = Math.abs(userVector[i] - vec[i]);
      distance += diff;
      if (diff === 0) exact++;
    }
    const similarity = Math.max(0, Math.round((1 - distance / 12) * 100));
    return { ...tp, distance, exact, similarity };
  }).sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (b.exact !== a.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });

  const best = ranked[0];
  const lib = types();

  let finalType, kicker, badge, special = false;

  if (best.similarity < 55) {
    finalType = FALLBACK_TYPE[state.lang];
    kicker = t('fallback_kicker');
    badge = `${t('result_match')} ${best.similarity}%`;
    special = true;
  } else {
    finalType = lib[best.code];
    kicker = t('result_kicker');
    badge = `${t('result_match')} ${best.similarity}% · ${best.exact}/6 ${t('result_exact')}`;
  }

  return { rawScores, levels, ranked, best, finalType, kicker, badge, special };
}

// ============================================================
//  Render results
// ============================================================

function renderResult() {
  const result = computeResult();
  const type = result.finalType;
  const dimMeta = dims();
  const explanations = DIM_EXPLANATIONS[state.lang];

  $('#resultKicker').textContent   = result.kicker;
  $('#resultTypeName').textContent = type.name;
  $('#resultTagline').textContent  = type.tagline;
  $('#matchBadge').textContent     = result.badge;
  $('#resultDesc').textContent     = type.desc;
  $('#analysisHeading').textContent = t('result_analysis_heading');
  $('#dimHeading').textContent     = t('result_dim_heading');
  $('#noteHeading').textContent    = t('result_note_heading');
  $('#noteText').textContent       = t('result_note');

  const dimList = $('#dimList');
  dimList.innerHTML = DIM_ORDER.map(dim => {
    const level = result.levels[dim];
    const raw = result.rawScores[dim];
    const pct = Math.round(((raw - 5) / 10) * 100);
    const explanation = explanations[dim][level];
    return `<div class="dim-item">
      <div class="dim-item-top">
        <span class="dim-item-name">${dimMeta[dim].name}</span>
        <span class="dim-item-score">${level} · ${raw}/15</span>
      </div>
      <div class="dim-bar-track"><div class="dim-bar-fill" style="width:${pct}%"></div></div>
      <p>${explanation}</p>
    </div>`;
  }).join('');

  showScreen('result');
}

// ============================================================
//  Language toggle
// ============================================================

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('bbti-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  applyStaticText();
  renderPreviews();

  if (screens.test.classList.contains('active')) {
    const newQs = qs();
    const qMap = Object.fromEntries(newQs.map(q => [q.id, q]));
    state.shuffledQuestions = state.shuffledQuestions.map(q => qMap[q.id]);
    renderQuestions();
  }

  if (screens.result.classList.contains('active')) {
    renderResult();
  }
}

// ============================================================
//  Event listeners
// ============================================================

langToggle.addEventListener('click', () => {
  setLang(state.lang === 'en' ? 'zh' : 'en');
});

startBtn.addEventListener('click', () => startQuiz());
backIntroBtn.addEventListener('click', () => showScreen('intro'));
submitBtn.addEventListener('click', () => renderResult());
restartBtn.addEventListener('click', () => startQuiz());
toTopBtn.addEventListener('click', () => showScreen('intro'));

// ============================================================
//  Init
// ============================================================

setLang(state.lang);
