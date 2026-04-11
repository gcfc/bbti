---
name: BBTI Basketball Quiz Site
overview: Build a "BBTI" (Basketball Behavioral Type Indicator) quiz website - a satirical MBTI-style personality test for basketball players, inspired by SBTI and SKTI, using vanilla HTML/CSS/JS in a single-page app.
todos:
  - id: scaffold
    content: Create bbti/ directory with index.html, style.css, app.js, i18n.js, README.md
    status: completed
  - id: i18n
    content: Build i18n system - language toggle, all strings in en/zh objects, persist preference to localStorage
    status: completed
  - id: styles
    content: Build the basketball-themed CSS design system (orange palette, card layout, responsive, 3 screens, language toggle)
    status: completed
  - id: html
    content: Build index.html with landing page hero, quiz container, results template, and language toggle in header
    status: completed
  - id: questions
    content: Write 30 humorous basketball-themed questions (5 per dimension) in both English and Chinese
    status: completed
  - id: types
    content: Define ~20 personality types with codes, patterns, bilingual names/taglines/descriptions (Chinese shows both zh+en type code)
    status: completed
  - id: logic
    content: Implement scoring algorithm (dimension sums, L/M/H mapping, Manhattan distance matching)
    status: completed
  - id: polish
    content: Add animations, mobile responsiveness, GitHub Pages deployment config, and final polish
    status: completed
isProject: false
---

# BBTI - Basketball Behavioral Type Indicator

## Reference Analysis

**SBTI** ([sbti.unun.dev](http://sbti.unun.dev), [source on GitHub](https://github.com/UnluckyNinja/SBTI-test)):

- Single `index.html` file (~1700 lines) - all CSS + HTML + JS inline
- Pure vanilla, zero dependencies. Hosted on Cloudflare Pages.
- 3 screens: landing -> quiz (all questions on one page, scrollable) -> results
- 30 normal questions + 1 hidden gate question across 15 dimensions (2 questions each)
- Scoring: sum per dimension -> L/M/H. Pattern-match against 26 type templates via Manhattan distance.
- Result page shows: type name, match %, long satirical description, dimension-by-dimension breakdown.
- Clean, minimal green-themed UI with CSS variables, card-based layout, responsive.

**SKTI** ([skibti.com](https://skibti.com)):

- 30 questions, 6 dimensions, 26 types
- Polished landing page with stat callouts ("30 questions", "26 types", "6 dimensions") and personality preview cards
- Not open-source; likely a framework-based SPA

## Tech Stack

Match the existing repo pattern (`spotify-karaoke` uses split vanilla files):

No build step, no framework. Deployed to **GitHub Pages** (`github.io`).

```
bbti/
  index.html      # Structure + meta tags + language toggle
  style.css       # All styles
  app.js          # Quiz logic, scoring, rendering
  i18n.js         # All translatable strings (en + zh)
  README.md       # Brief project description
```

## Internationalization (i18n)

**Toggle**: A language switch button (EN / 中文) in the top-right corner of every screen. Persisted to `localStorage`.

**Strategy**: All user-facing strings live in `i18n.js` as a single `STRINGS` object keyed by `en` / `zh`. The app calls a `t(key)` function everywhere instead of hardcoding text. When the language toggles, the entire active screen re-renders.

```javascript
// i18n.js structure
export const STRINGS = {
  en: {
    site_title: "BBTI",
    hero_heading: "What's Your Basketball Personality?",
    start_btn: "Start Quiz",
    // ...all UI chrome, questions, type descriptions
  },
  zh: {
    site_title: "BBTI 篮球人格测试",
    hero_heading: "测测你是哪种篮球人？",
    start_btn: "开始测试",
    // ...
  }
};
```

**Bilingual rules**:

- In **English mode**: everything in English.
- In **Chinese mode**: UI chrome and questions in Chinese. Personality type results show **both** the English code and Chinese name, e.g. "KOBE（曼巴）". Type descriptions in Chinese.
- Dimension names shown bilingually in both modes for clarity, e.g. "投篮选择 Shot Selection".

## GitHub Pages Deployment

- The site lives at `bbti/` in this repo. GitHub Pages can be configured to serve from the `bbti` folder (or root of a branch).
- Since we're in a multi-project repo, the simplest approach: configure Pages to deploy from a specific branch, then access at `https://<username>.github.io/eval/bbti/` (or set up a custom domain).
- All asset paths will be relative (no leading `/`) so the site works regardless of base path.

## Design System

- **Theme**: Basketball orange/amber palette. CSS variables for easy theming.
  - `--accent`: `#e87a2e` (basketball orange)
  - `--bg`: warm off-white `#faf6f1`
  - Subtle basketball texture (CSS radial gradient mimicking ball seams)
- **Layout**: Responsive, card-based, max-width container. Mobile-first.
- **3 screens** (show/hide via `.active` class, no routing):
  1. **Landing** - Hero with title, tagline, stat pills, personality preview cards, start button
  2. **Quiz** - All 30 questions on one scrollable page with progress bar
  3. **Results** - Type card, match %, satirical description, 6-dimension breakdown bars

## Dimension System (6 Dimensions, 5 Questions Each = 30 Questions)

Each question has 3 answer options scored 1-3. Sum per dimension (range 5-15) maps to L/M/H.


| Dim | Name           | Low End              | High End                  |
| --- | -------------- | -------------------- | ------------------------- |
| S   | Shot Selection | Chaotic Chucker      | Calculated Assassin       |
| D   | Defense        | Traffic Cone         | Lockdown Warden           |
| E   | Ego            | Role Player Energy   | Main Character Syndrome   |
| H   | Hustle         | Load Management      | Leave It All On The Court |
| I   | Court IQ       | Vibes Only           | Chess Master              |
| C   | Clutch         | Brick Under Pressure | Ice In Veins              |


## Personality Types (~20 types, bilingual)

Each type has a 6-char pattern (L/M/H for S-D-E-H-I-C), an English name, a Chinese name, and satirical descriptions in both languages. In Chinese mode, types display as "CODE（中文名）".

- **KOBE** / 曼巴 ("The Mamba") - HHHHHH - The mythical complete player. You warm up for warmups.
- **BRICK** / 铁匠 ("The Volume Shooter") - LMLMLM - You miss 100% of the shots you don't take, and also 85% of the ones you do.
- **BENCH** / 板凳王 ("The Benchwarmer") - LLLLLL - You've perfected the art of towel-waving. Your jersey is the cleanest on the team.
- **FLOP** / 影帝 ("The Oscar Winner") - LHHMHL - You've taken more dives than an Olympic swimmer.
- **DAWG** / 恶犬 ("The Junkyard Dog") - LHMLHM - You can't shoot, but you'll fight for every rebound like it insulted your mother.
- **CHEF** / 厨神 ("The Splash Wizard") - HLLMLH - Deep threes are your love language. You shoot from the parking lot.
- **STAT** / 数据刷 ("The Box Score Hunter") - HMHLLM - Triple-doubles are your religion, even at 47 minutes played.
- **GOAT** / 自封之王 ("Self-Proclaimed Greatest") - MMHMLM - You've compared yourself to LeBron in a pickup game. Unironically.
- **LOAD** / 养生帝 ("The Load Manager") - HHMLLH - Saving energy for "the playoffs" (it's a Tuesday pickup game).
- **DIME** / 助攻王 ("The Pass-First God") - LHMHHH - You'd rather die than take an open layup. "I'm a facilitator."
- **DUNK** / 暴扣兽 ("The Poster Machine") - MLLHML - If it's not a poster dunk, it's not worth your time.
- **ANKL** / 脚踝终结者 ("The Crossover Merchant") - HMMHHH - Broken more ankles than an orthopedic surgeon.
- **REFS** / 杠精 ("The Rules Lawyer") - LMHMLM - Argued more calls than baskets made. "AND ONE!" on a wide open layup.
- **TANK** / 坦克 ("The Immovable Object") - HMMLML - You plant yourself in the post like a tree. Physics is your best move.
- **HEAT** / 热区侠 ("The Streaker") - HLLMLH - When hot, best player alive. When cold, worst. No in between.
- **POST** / 网红球员 ("The Influencer") - LLHLLM - Here for the Instagram story, not the W.
- **YELL** / 场边教练 ("The Sideline Coach") - LMHMLH - Haven't touched a ball in 3 years but opinions about everyone's form.
- **SWAT** / 盖帽兽 ("The Eraser") - LHMLHM - Sending shots into the 5th row. Offense is someone else's problem.
- **TOWL** / 气氛组长 ("The Hype Man") - LLHLML - You ride the bench but nobody celebrates harder.
- **BALL** / 黑洞 ("The Ball Hog") - HLHMLM - Once the ball touches your hands, it enters a black hole.

## Scoring Algorithm

Follows SBTI's proven approach:

1. Sum each dimension's 5 question scores (range 5-15)
2. Map to level: L (5-8), M (9-11), H (12-15)
3. Build user vector: 6 levels like `[H, M, L, H, H, M]`
4. Compare to each type's pattern using Manhattan distance (numeric: L=1, M=2, H=3)
5. Rank by lowest distance, break ties by exact-dimension matches
6. Compute match % as `max(0, round((1 - distance/12) * 100))`
7. If best match < 55%, fall back to a "wildcard" type

## Questions

30 questions, each basketball-themed and humorous. Examples per dimension:

**Shot Selection (S):**

- "You're wide open at the three-point line. What do you do?" (A: Pump fake 3 times then pass / B: Shoot it / C: Dribble into 3 defenders because you saw Kyrie do it)
- "Your shooting percentage this pickup game is 1/11. Your move?" (A: Keep shooting, law of averages / B: Maybe drive to the rim / C: I've already told myself I'm just warming up)

**Defense (D):**

- "The guy you're guarding just scored 6 straight. What's your adjustment?" (A: Switch onto someone weaker / B: Get lower in stance / C: I was playing defense?)

**Ego (E):**

- "Your team wins by 30. How do you describe your role in the win?" (A: We played great team ball / B: I did my part / C: I carried)

(Full 30 questions to be written during implementation)

## Implementation Architecture

```javascript
// i18n.js - all translatable content
export const STRINGS = { en: { ... }, zh: { ... } };
export const QUESTIONS = {
  en: [ { id: 'q1', dim: 'S', text: '...', options: [...] }, ... ],
  zh: [ { id: 'q1', dim: 'S', text: '...', options: [...] }, ... ]
};
export const TYPE_LIBRARY = {
  en: { "KOBE": { code, name, tagline, desc }, ... },
  zh: { "KOBE": { code, name_zh: "曼巴", name_display: "KOBE（曼巴）", tagline, desc }, ... }
};

// app.js - logic + rendering
// - lang state + toggle handler, calls re-render on switch
// - showScreen('intro'|'test'|'result')
// - renderQuestions() reads QUESTIONS[currentLang]
// - computeResult() is language-agnostic (works on dimension scores)
// - renderResult() reads TYPE_LIBRARY[currentLang] for display
```

Key design decision: scoring/patterns are language-independent (defined once). Only display strings are duplicated per language.

