// ============================================================
//  BBTI - All translatable content (EN + ZH)
// ============================================================

export const STRINGS = {
  en: {
    site_title: 'BBTI',
    site_subtitle: 'Basketball Behavioral Type Indicator',
    hero_heading: "What's Your Basketball Personality?",
    hero_sub: 'BBTI is a personality test for basketball lovers. Answer 30 questions across 6 dimensions to find your basketball alter ego. Pure entertainment — don\'t take it seriously.',
    dim_intro: 'BBTI measures 6 personality dimensions.',
    stat_questions: '30',
    stat_questions_label: 'Questions',
    stat_types: '21',
    stat_types_label: 'Personality Types',
    stat_dims: '6',
    stat_dims_label: 'Dimensions',
    start_btn: 'Start Quiz',
    preview_heading: 'Some Personality Previews',
    progress_of: '/',
    quiz_hint_incomplete: 'Answer every question before submitting. No shortcuts — this isn\'t a layup drill.',
    quiz_hint_complete: 'All done. Time to face the music.',
    back_btn: 'Back to Home',
    submit_btn: 'Submit & See Results',
    q_label: 'Q',
    dim_hidden: 'Dimension hidden',
    result_kicker: 'Your Primary Type',
    result_match: 'Match',
    result_exact: 'exact dims',
    result_analysis_heading: 'Type Breakdown',
    result_dim_heading: '6-Dimension Scores',
    result_note_heading: 'Disclaimer',
    result_note: 'This test is for entertainment only. Don\'t use it for NBA draft decisions, trash talk ammunition, or breakup justifications.',
    restart_btn: 'Retake Quiz',
    home_btn: 'Back to Home',
    fallback_kicker: 'System Override',
    fallback_sub: 'The personality database short-circuited trying to classify you.',
    lang_toggle: '中文',
  },
  zh: {
    site_title: 'BBTI 篮球人格测试',
    site_subtitle: 'Basketball Behavioral Type Indicator',
    hero_heading: '测测你是哪种篮球人？',
    hero_sub: 'BBTI 是一套面向篮球爱好者的人格测试。回答 30 道题，从投篮风格到关键时刻表现，6 个维度帮你找到最匹配的篮球人格。纯属娱乐，切勿当真。',
    dim_intro: 'BBTI 采用 6 组人格切面。',
    stat_questions: '30',
    stat_questions_label: '道题目',
    stat_types: '21',
    stat_types_label: '种人格',
    stat_dims: '6',
    stat_dims_label: '个维度',
    start_btn: '开始测试',
    preview_heading: '部分人格预览',
    progress_of: ' / ',
    quiz_hint_incomplete: '全部答完才能提交。球场上没有捷径，做题也一样。',
    quiz_hint_complete: '答完了。准备好接受审判吧。',
    back_btn: '返回首页',
    submit_btn: '提交并查看结果',
    q_label: '第',
    dim_hidden: '维度已隐藏',
    result_kicker: '你的主类型',
    result_match: '匹配度',
    result_exact: '维命中',
    result_analysis_heading: '人格解读',
    result_dim_heading: '六维度评分',
    result_note_heading: '友情提示',
    result_note: '本测试仅供娱乐，别拿它当选秀依据、垃圾话素材或分手借口。',
    restart_btn: '重新测试',
    home_btn: '回到首页',
    fallback_kicker: '系统强制兜底',
    fallback_sub: '人格数据库在分析你的时候宕机了。',
    lang_toggle: 'EN',
  }
};

// ============================================================
//  Dimension metadata
// ============================================================

export const DIMENSIONS = {
  en: {
    S: { name: 'Shot Selection', low: 'Chaotic Chucker', high: 'Calculated Assassin' },
    D: { name: 'Defense', low: 'Traffic Cone', high: 'Lockdown Warden' },
    E: { name: 'Ego', low: 'Role Player Energy', high: 'Main Character Syndrome' },
    H: { name: 'Hustle', low: 'Load Management', high: 'Leave It All On The Court' },
    I: { name: 'Court IQ', low: 'Vibes Only', high: 'Chess Master' },
    C: { name: 'Clutch', low: 'Brick Under Pressure', high: 'Ice In Veins' },
  },
  zh: {
    S: { name: '投篮选择 Shot Selection', low: '乱射狂魔', high: '冷血杀手' },
    D: { name: '防守 Defense', low: '移动路障', high: '锁防大闸' },
    E: { name: '自我 Ego', low: '角色球员心态', high: '主角光环' },
    H: { name: '拼劲 Hustle', low: '养生篮球', high: '玩命狂奔' },
    I: { name: '球商 Court IQ', low: '随缘打球', high: '球场棋手' },
    C: { name: '关键球 Clutch', low: '大心脏？大铁锤', high: '冰血杀神' },
  }
};

export const DIM_ORDER = ['S', 'D', 'E', 'H', 'I', 'C'];

export const DIM_EXPLANATIONS = {
  en: {
    S: {
      L: 'Your shot selection is... creative. You believe in volume over accuracy.',
      M: 'You pick your spots decently. Not a sniper, not a chucker — somewhere in between.',
      H: 'Every shot is a calculated decision. You only pull the trigger when it\'s right.',
    },
    D: {
      L: 'You and defense have a long-distance relationship. Very long distance.',
      M: 'You play defense when you remember to. Which is about half the time.',
      H: 'You take personal offense when your man scores. Defense is your identity.',
    },
    E: {
      L: 'You\'re happy to play your role. The spotlight makes you uncomfortable.',
      M: 'You\'ll step up when needed, but you\'re not fighting for the last shot.',
      H: 'Main character energy. Every game is YOUR game. Everyone else is a supporting cast.',
    },
    H: {
      L: 'You conserve energy like it\'s a non-renewable resource. Strategic rest.',
      M: 'You hustle in bursts. A sprint here, a jog there, a walk when nobody\'s watching.',
      H: 'You dive for every loose ball like your life depends on it. Maximum effort, always.',
    },
    I: {
      L: 'Basketball strategy? You just run around and hope for the best.',
      M: 'You understand the basics. Pick and roll, space the floor, don\'t dribble into traffic.',
      H: 'You see the play three passes ahead. The court is a chess board to you.',
    },
    C: {
      L: 'When the pressure is on, your hands turn to stone. It\'s not your fault — it\'s physics.',
      M: 'You can hit the big shot sometimes. Other times, not so much. It\'s a coin flip.',
      H: 'Game on the line? Give you the ball. You live for this moment.',
    },
  },
  zh: {
    S: {
      L: '你的投篮选择……很有创意。你信奉"量大出奇迹"。',
      M: '投篮时机把握得还行。不算狙击手，也不算铁匠——介于两者之间。',
      H: '每一次出手都经过精密计算。时机不对，绝不轻易扣扳机。',
    },
    D: {
      L: '你和防守是异地恋关系。非常异地的那种。',
      M: '你想起来的时候会防守。大概有一半时间能想起来。',
      H: '对位的人得分你会觉得是对你的人身攻击。防守就是你的身份证。',
    },
    E: {
      L: '你乐于扮演角色球员。聚光灯让你浑身不自在。',
      M: '需要的时候你会站出来，但你不会抢最后一投。',
      H: '主角光环全开。每场球都是你的舞台，其他人都是配角。',
    },
    H: {
      L: '你保存体力像保护不可再生资源。战略性休息。',
      M: '你偶尔冲刺一下，偶尔慢跑，没人看的时候散步。',
      H: '每个地板球你都飞身扑救，仿佛命系于此。永远全力以赴。',
    },
    I: {
      L: '篮球战术？你就是跑来跑去然后听天由命。',
      M: '你理解基本操作。挡拆、拉开空间、别往人堆里运球。',
      H: '你能看到三个传球后的局面。球场在你眼里就是棋盘。',
    },
    C: {
      L: '压力一上来，你的双手就变成了石头。这不是你的错——是物理。',
      M: '关键球有时能进，有时不能。全看运气。',
      H: '比赛悬念时刻？把球给你。你为这一刻而生。',
    },
  }
};

// ============================================================
//  Questions (30 total, 5 per dimension)
// ============================================================

export const QUESTIONS = {
  en: [
    // --- Shot Selection (S) ---
    { id: 'q1', dim: 'S', text: 'You\'re wide open at the three-point line. What do you do?', options: [
      { label: 'Pump fake 3 times, then pass to someone less open', value: 1 },
      { label: 'Take the shot — that\'s what open means', value: 2 },
      { label: 'Dribble into 3 defenders because you saw Kyrie do it once', value: 3 },
    ]},
    { id: 'q2', dim: 'S', text: 'Your shooting percentage this pickup game is 1 for 11. Your move?', options: [
      { label: 'Keep shooting — law of averages, baby', value: 1 },
      { label: 'Maybe drive to the rim instead', value: 2 },
      { label: 'I\'ve decided I\'m "facilitating" now', value: 3 },
    ]},
    { id: 'q3', dim: 'S', text: 'You catch the ball at half court with 2 seconds left, down by 2. What do you do?', options: [
      { label: 'Heave it. Shooters shoot.', value: 1 },
      { label: 'Try to get a couple dribbles closer first', value: 2 },
      { label: 'Call timeout... wait, this is pickup. Pass it.', value: 3 },
    ]},
    { id: 'q4', dim: 'S', text: 'How do you decide whether to shoot a mid-range jumper?', options: [
      { label: 'If I\'m holding the ball, I\'m shooting the ball', value: 1 },
      { label: 'Only if I\'m in rhythm and the defense gives it to me', value: 2 },
      { label: 'Mid-range? That\'s the most inefficient shot in basketball.', value: 3 },
    ]},
    { id: 'q5', dim: 'S', text: 'Your teammate is on fire — 5 for 5. You get the ball. What happens?', options: [
      { label: 'I\'m also on fire in my mind. My shot.', value: 1 },
      { label: 'I\'ll look for him, but if I\'m open, I\'m shooting', value: 2 },
      { label: 'Feed the hot hand, obviously', value: 3 },
    ]},

    // --- Defense (D) ---
    { id: 'q6', dim: 'D', text: 'The guy you\'re guarding just scored 6 straight points. What\'s your adjustment?', options: [
      { label: 'I was playing defense?', value: 1 },
      { label: 'Switch onto someone weaker', value: 2 },
      { label: 'Get lower, tighter, make it personal', value: 3 },
    ]},
    { id: 'q7', dim: 'D', text: 'Your man sets a screen. How do you navigate it?', options: [
      { label: 'Walk directly into it and complain it was an illegal screen', value: 1 },
      { label: 'Fight over it eventually', value: 2 },
      { label: 'I already anticipated it. I\'m hedging before it arrives.', value: 3 },
    ]},
    { id: 'q8', dim: 'D', text: 'Transition defense — the other team is fast-breaking. Where are you?', options: [
      { label: 'Still at the other end arguing about the last play', value: 1 },
      { label: 'Jogging back, I\'ll get there eventually', value: 2 },
      { label: 'Already back. I started sprinting the moment the shot went up.', value: 3 },
    ]},
    { id: 'q9', dim: 'D', text: 'How do you feel about taking a charge?', options: [
      { label: 'My body is a temple, not a speed bump', value: 1 },
      { label: 'If the angle is right and I won\'t get hurt, sure', value: 2 },
      { label: 'I\'ll plant my feet in front of a freight train if it means a stop', value: 3 },
    ]},
    { id: 'q10', dim: 'D', text: 'After a made basket, what\'s your first instinct?', options: [
      { label: 'Celebrate / check my phone on the bench', value: 1 },
      { label: 'Get back on defense at a reasonable pace', value: 2 },
      { label: 'I\'m already pressuring the inbounder', value: 3 },
    ]},

    // --- Ego (E) ---
    { id: 'q11', dim: 'E', text: 'Your team wins by 30. How do you describe your role in the victory?', options: [
      { label: 'We played great team ball', value: 1 },
      { label: 'I did my part', value: 2 },
      { label: 'I carried. They should be thanking me.', value: 3 },
    ]},
    { id: 'q12', dim: 'E', text: 'Someone on the court is clearly better than you. How do you react?', options: [
      { label: 'I\'ll do the little things — screens, rebounds, hustle plays', value: 1 },
      { label: 'Respect, but I\'m still going to compete', value: 2 },
      { label: 'Nah, I\'m cooking him today. Main character energy.', value: 3 },
    ]},
    { id: 'q13', dim: 'E', text: 'Teams are being picked for a pickup game. You\'re a captain. First pick?', options: [
      { label: 'The tallest person — you can\'t teach height', value: 1 },
      { label: 'Someone I know is solid and reliable', value: 2 },
      { label: 'Doesn\'t matter, I\'m dropping 30 regardless', value: 3 },
    ]},
    { id: 'q14', dim: 'E', text: 'A teammate criticizes your shot selection mid-game. Your reaction?', options: [
      { label: 'He\'s probably right. I\'ll adjust.', value: 1 },
      { label: 'I hear it, but I\'ll keep playing my game', value: 2 },
      { label: '"Scoreboard." Then shoot again immediately.', value: 3 },
    ]},
    { id: 'q15', dim: 'E', text: 'How do you introduce yourself at a new gym?', options: [
      { label: 'Just show up, play quiet, let my game speak', value: 1 },
      { label: 'Make some conversation, get to know people', value: 2 },
      { label: 'I announce I played varsity / semi-pro / overseas (may or may not be true)', value: 3 },
    ]},

    // --- Hustle (H) ---
    { id: 'q16', dim: 'H', text: 'Loose ball on the ground. What happens?', options: [
      { label: 'Someone else will get it. I\'m saving my knees.', value: 1 },
      { label: 'I\'ll go for it if I\'m close', value: 2 },
      { label: 'I\'m diving headfirst. That ball is MINE.', value: 3 },
    ]},
    { id: 'q17', dim: 'H', text: 'It\'s the third game in a row. How\'s your energy?', options: [
      { label: 'I retired after game one', value: 1 },
      { label: 'Running on fumes but still going', value: 2 },
      { label: 'Same intensity as game one. Pain is temporary.', value: 3 },
    ]},
    { id: 'q18', dim: 'H', text: 'Your team is down 8-2 in a pickup game to 11. What\'s your body language?', options: [
      { label: 'Already mentally packing up. "Run it back?"', value: 1 },
      { label: 'Frustrated but still playing', value: 2 },
      { label: 'LOUDER. More energy. This is where legends are made.', value: 3 },
    ]},
    { id: 'q19', dim: 'H', text: 'A rebound is contested between you and a much taller player. Your approach?', options: [
      { label: 'Let him have it, I\'ll get the next one (narrator: he won\'t)', value: 1 },
      { label: 'Box out, give myself a chance', value: 2 },
      { label: 'Climb his back if I have to. That board is mine.', value: 3 },
    ]},
    { id: 'q20', dim: 'H', text: 'How many times do you sprint back on a fast break in a casual game?', options: [
      { label: 'Sprint? In a casual game? You\'re joking.', value: 1 },
      { label: 'A few times, when it matters', value: 2 },
      { label: 'Every. Single. Time.', value: 3 },
    ]},

    // --- Court IQ (I) ---
    { id: 'q21', dim: 'I', text: 'Your team keeps turning the ball over against a press. What do you suggest?', options: [
      { label: 'I don\'t suggest things. I just play.', value: 1 },
      { label: '"Maybe slow it down?"', value: 2 },
      { label: 'I already adjusted — split the trap, find the middle, advance it quick', value: 3 },
    ]},
    { id: 'q22', dim: 'I', text: 'You notice the opposing team always cheats left on the pick-and-roll. What do you do?', options: [
      { label: 'What\'s a pick and roll?', value: 1 },
      { label: 'I noticed it too, I\'ll try to exploit it', value: 2 },
      { label: 'I\'ve been rejecting the screen right for the last 3 possessions already', value: 3 },
    ]},
    { id: 'q23', dim: 'I', text: 'Where do you position yourself when you don\'t have the ball on offense?', options: [
      { label: 'Wherever my feet happen to take me', value: 1 },
      { label: 'I try to stay spaced out and available', value: 2 },
      { label: 'I\'m reading the defense and relocating to the weak side before the pass is even made', value: 3 },
    ]},
    { id: 'q24', dim: 'I', text: 'A teammate keeps making the same mistake. How do you handle it?', options: [
      { label: 'Not my problem, I just play my game', value: 1 },
      { label: 'Mention it casually between possessions', value: 2 },
      { label: 'I adjust my positioning to cover for his mistake without saying a word', value: 3 },
    ]},
    { id: 'q25', dim: 'I', text: 'How often do you watch film / game highlights to improve your game?', options: [
      { label: 'I watch highlights for the dunks, not the strategy', value: 1 },
      { label: 'Sometimes I\'ll study a move I want to try', value: 2 },
      { label: 'I study tendencies, footwork, off-ball movement. This is a science.', value: 3 },
    ]},

    // --- Clutch (C) ---
    { id: 'q26', dim: 'C', text: 'Game point. Your team has the ball. Do you want it?', options: [
      { label: 'Absolutely not. Please give it to literally anyone else.', value: 1 },
      { label: 'I\'ll take it if the play comes to me', value: 2 },
      { label: 'Give me the ball. I was born for this.', value: 3 },
    ]},
    { id: 'q27', dim: 'C', text: 'You\'re shooting free throws to win. How are your hands?', options: [
      { label: 'Shaking like I just had 4 espressos', value: 1 },
      { label: 'A little nervous, but I\'ll manage', value: 2 },
      { label: 'Dry. Calm. I\'ve visualized this a thousand times.', value: 3 },
    ]},
    { id: 'q28', dim: 'C', text: 'You missed the last shot badly. Next possession, same situation. Your move?', options: [
      { label: 'Pass. Pass. PASS. I can\'t be trusted right now.', value: 1 },
      { label: 'Hesitate for a second, then decide based on the defense', value: 2 },
      { label: 'Same shot. No hesitation. Amnesia is a superpower.', value: 3 },
    ]},
    { id: 'q29', dim: 'C', text: 'Your team is on a 0-5 run and momentum has completely shifted. What do you do?', options: [
      { label: 'Panic internally. Blame the universe.', value: 1 },
      { label: 'Try to steady the ship, slow it down', value: 2 },
      { label: 'Attack. Momentum is a myth. Force your will on the game.', value: 3 },
    ]},
    { id: 'q30', dim: 'C', text: 'After the game, how do you remember your performance in close moments?', options: [
      { label: 'I try not to think about it. Repression is my friend.', value: 1 },
      { label: 'I replay the key plays and learn from them', value: 2 },
      { label: 'I only remember the big shots I hit. Selective memory is elite.', value: 3 },
    ]},
  ],

  zh: [
    // --- 投篮选择 (S) ---
    { id: 'q1', dim: 'S', text: '你在三分线外完全空位。你会怎么做？', options: [
      { label: '假动作晃三下，然后传给一个没那么空的人', value: 1 },
      { label: '出手——空位不投等什么呢', value: 2 },
      { label: '运球突入三个防守人中间，因为你看欧文这么干过', value: 3 },
    ]},
    { id: 'q2', dim: 'S', text: '这场野球你11投1中。你的下一步？', options: [
      { label: '继续投——大数定律，宝贝', value: 1 },
      { label: '可能换成突破吧', value: 2 },
      { label: '我决定现在开始"组织进攻"了', value: 3 },
    ]},
    { id: 'q3', dim: 'S', text: '你在半场接到球，还剩2秒，落后2分。你会？', options: [
      { label: '直接扔。投手就是要投。', value: 1 },
      { label: '试着运两步靠近一点再出手', value: 2 },
      { label: '叫暂停……等等，这是野球。传球吧。', value: 3 },
    ]},
    { id: 'q4', dim: 'S', text: '你怎么决定要不要投中距离？', options: [
      { label: '球在我手里，那就出手', value: 1 },
      { label: '节奏对了、防守给了空间才出手', value: 2 },
      { label: '中距离？那是篮球里最低效的投篮。', value: 3 },
    ]},
    { id: 'q5', dim: 'S', text: '你的队友手感火热——5投5中。你拿到球了。接下来？', options: [
      { label: '我脑子里觉得自己也火热。我的球。', value: 1 },
      { label: '我会找他，但如果我空了，我也会投', value: 2 },
      { label: '喂球给手热的人，这还用说？', value: 3 },
    ]},

    // --- 防守 (D) ---
    { id: 'q6', dim: 'D', text: '你防的人连得6分了。你怎么调整？', options: [
      { label: '我在防守吗？', value: 1 },
      { label: '换到一个弱一点的人身上', value: 2 },
      { label: '重心压低、贴紧他、这事儿变私人恩怨了', value: 3 },
    ]},
    { id: 'q7', dim: 'D', text: '对方给你来了一个挡拆。你怎么应对？', options: [
      { label: '一头撞上去然后抱怨这是非法掩护', value: 1 },
      { label: '努力绕过去', value: 2 },
      { label: '我早就预判了。掩护还没到我就已经在绕了。', value: 3 },
    ]},
    { id: 'q8', dim: 'D', text: '对方快攻了。你在哪？', options: [
      { label: '还在对面半场为上一个球争论不休', value: 1 },
      { label: '慢跑回防，总会到的', value: 2 },
      { label: '球一出手我就全速回防了', value: 3 },
    ]},
    { id: 'q9', dim: 'D', text: '你怎么看造进攻犯规这件事？', options: [
      { label: '我的身体是殿堂，不是减速带', value: 1 },
      { label: '角度对了且不会受伤的话，可以', value: 2 },
      { label: '我愿意站在火车前面，只要能造一个进攻犯规', value: 3 },
    ]},
    { id: 'q10', dim: 'D', text: '对方进球后，你的第一反应是什么？', options: [
      { label: '庆祝/在板凳上看手机', value: 1 },
      { label: '正常速度回防', value: 2 },
      { label: '我已经在紧逼发球的人了', value: 3 },
    ]},

    // --- 自我 (E) ---
    { id: 'q11', dim: 'E', text: '你的队伍赢了30分。你怎么形容你在胜利中的角色？', options: [
      { label: '我们打了很好的团队篮球', value: 1 },
      { label: '我完成了自己的任务', value: 2 },
      { label: '我背着他们赢的。他们应该感谢我。', value: 3 },
    ]},
    { id: 'q12', dim: 'E', text: '场上有个人明显比你强。你怎么反应？', options: [
      { label: '我做好脏活累活——掩护、篮板、拼抢', value: 1 },
      { label: '尊重，但我还是要和他较量', value: 2 },
      { label: '不，今天我要把他打爆。主角光环启动。', value: 3 },
    ]},
    { id: 'q13', dim: 'E', text: '野球选人，你是队长。第一个选谁？', options: [
      { label: '最高的那个——身高教不来的', value: 1 },
      { label: '我知道靠谱的人', value: 2 },
      { label: '无所谓，不管谁在我都砍30', value: 3 },
    ]},
    { id: 'q14', dim: 'E', text: '一个队友在比赛中吐槽你的出手选择。你的反应？', options: [
      { label: '他可能说得对，我调整一下', value: 1 },
      { label: '我听到了，但我继续打我的', value: 2 },
      { label: '"看比分。"然后立刻再投一个。', value: 3 },
    ]},
    { id: 'q15', dim: 'E', text: '你第一次去一个新球场，怎么介绍自己？', options: [
      { label: '低调打球，让球技说话', value: 1 },
      { label: '聊聊天，认识认识人', value: 2 },
      { label: '我宣布我打过校队/半职业/海外联赛（不一定是真的）', value: 3 },
    ]},

    // --- 拼劲 (H) ---
    { id: 'q16', dim: 'H', text: '球掉在地上了。你会？', options: [
      { label: '别人会捡的。我要保护膝盖。', value: 1 },
      { label: '离得近的话我会去抢', value: 2 },
      { label: '我已经飞扑出去了。那是我的球。', value: 3 },
    ]},
    { id: 'q17', dim: 'H', text: '已经连打三场了。你的体力如何？', options: [
      { label: '第一场打完我就退役了', value: 1 },
      { label: '油箱见底但还在撑', value: 2 },
      { label: '和第一场一样的强度。疼痛是暂时的。', value: 3 },
    ]},
    { id: 'q18', dim: 'H', text: '野球11分制，你的队伍2-8落后。你的肢体语言？', options: [
      { label: '精神上已经在收拾东西了。"再来一把？"', value: 1 },
      { label: '沮丧但还在打', value: 2 },
      { label: '更大声！更拼命！传奇就是这么诞生的。', value: 3 },
    ]},
    { id: 'q19', dim: 'H', text: '一个篮板在你和一个比你高得多的人之间争抢。你的策略？', options: [
      { label: '让给他吧，我抢下一个（旁白：他不会的）', value: 1 },
      { label: '卡位，给自己一个机会', value: 2 },
      { label: '有必要的话我爬他背上也要拿到。那板是我的。', value: 3 },
    ]},
    { id: 'q20', dim: 'H', text: '在一场休闲野球中，你会全速回防几次？', options: [
      { label: '全速？在休闲野球中？你在开玩笑吧。', value: 1 },
      { label: '关键时刻会跑几次', value: 2 },
      { label: '每一次。绝不例外。', value: 3 },
    ]},

    // --- 球商 (I) ---
    { id: 'q21', dim: 'I', text: '你的队伍一直在全场紧逼下失误。你的建议？', options: [
      { label: '我不提建议。我只管打球。', value: 1 },
      { label: '"要不慢下来？"', value: 2 },
      { label: '我已经在调整了——破夹击、找中路、快速推进', value: 3 },
    ]},
    { id: 'q22', dim: 'I', text: '你发现对方挡拆后总是往左边收缩。你会怎么做？', options: [
      { label: '什么是挡拆？', value: 1 },
      { label: '我也注意到了，试着利用一下', value: 2 },
      { label: '过去三个回合我已经在往右拒绝掩护了', value: 3 },
    ]},
    { id: 'q23', dim: 'I', text: '进攻时你没有球在手。你站在哪？', options: [
      { label: '脚把我带到哪就站哪', value: 1 },
      { label: '尽量拉开空间、保持接球位置', value: 2 },
      { label: '我在读防守然后往弱侧移动，传球还没出手我就到位了', value: 3 },
    ]},
    { id: 'q24', dim: 'I', text: '队友一直犯同一个错误。你怎么处理？', options: [
      { label: '不关我事，我打好我自己的', value: 1 },
      { label: '暂停间隙随口提一下', value: 2 },
      { label: '我默默调整自己的站位来弥补他的失误，不说一个字', value: 3 },
    ]},
    { id: 'q25', dim: 'I', text: '你多久看一次比赛录像或集锦来提升球技？', options: [
      { label: '我看集锦是为了看扣篮，不是看战术', value: 1 },
      { label: '偶尔会研究一个想学的动作', value: 2 },
      { label: '我研究习惯动作、脚步、无球跑动。这是一门科学。', value: 3 },
    ]},

    // --- 关键球 (C) ---
    { id: 'q26', dim: 'C', text: '赛点。你的队伍持球。你想要球吗？', options: [
      { label: '绝对不要。请把球给其他任何人。', value: 1 },
      { label: '如果机会来了我就投', value: 2 },
      { label: '把球给我。我为这一刻而生。', value: 3 },
    ]},
    { id: 'q27', dim: 'C', text: '你要投罚球定胜负。你的手怎么样？', options: [
      { label: '抖得像刚喝了四杯浓缩咖啡', value: 1 },
      { label: '有点紧张，但还能控制', value: 2 },
      { label: '干燥。平静。我脑子里已经演练了一千遍。', value: 3 },
    ]},
    { id: 'q28', dim: 'C', text: '你上一球投得离谱。下个回合同样的机会。你会？', options: [
      { label: '传球。传球。传球！现在不能相信我自己。', value: 1 },
      { label: '犹豫一下，然后根据防守决定', value: 2 },
      { label: '同样的球。零犹豫。失忆是超能力。', value: 3 },
    ]},
    { id: 'q29', dim: 'C', text: '你的队伍打出0-5的得分荒，势头完全逆转。你怎么做？', options: [
      { label: '内心崩溃。怪宇宙。', value: 1 },
      { label: '试着稳住节奏，放慢速度', value: 2 },
      { label: '进攻。势头是假的。用意志力碾压比赛。', value: 3 },
    ]},
    { id: 'q30', dim: 'C', text: '赛后你怎么回忆自己在关键时刻的表现？', options: [
      { label: '我尽量不去想。压抑是我的朋友。', value: 1 },
      { label: '我会复盘关键球然后从中学习', value: 2 },
      { label: '我只记得自己投进的那些。选择性记忆才是精英。', value: 3 },
    ]},
  ]
};

// ============================================================
//  Personality Type Library
// ============================================================

export const TYPE_LIBRARY = {
  en: {
    KOBE:  { code: 'KOBE',  name: 'The Mamba',             tagline: 'Mamba Mentality. No days off.', desc: 'You don\'t just play basketball — you ARE basketball. You warm up for your warmups. Every possession is life or death. You\'ve watched Kobe\'s retirement speech 47 times and cried every single time. Your teammates fear and respect you in equal measure. You arrive first, leave last, and judge everyone who doesn\'t. The court isn\'t just a court to you — it\'s a temple, and you\'re the high priest of hoops.' },
    BRICK: { code: 'BRICK', name: 'The Volume Shooter',    tagline: 'You miss 100% of the shots you take too.', desc: 'You miss 100% of the shots you don\'t take. You also miss about 85% of the shots you DO take. But here\'s the thing — shooters shoot. That\'s what they do. And you are, without question, a shooter. Your teammates have stopped passing to you but that hasn\'t slowed you down because you just dribble up and launch anyway. Somewhere, a rim is filing a restraining order against you.' },
    BENCH: { code: 'BENCH', name: 'The Professional Benchwarmer', tagline: 'My jersey is the cleanest on the team.', desc: 'You have perfected the ancient art of benchwarming. Your jersey is pristine. Your sneakers are unscuffed. You can wave a towel with more enthusiasm than most people can muster for anything in their entire lives. You are the emotional backbone of the team — from the sideline. Some warriors fight. You... spectate. Strategically.' },
    FLOP: { code: 'FLOP', name: 'The Oscar Winner',       tagline: 'Contact? What contact? *falls dramatically*', desc: 'You\'ve taken more dives than the entire Olympic swimming team combined. A gentle breeze sends you sprawling. You can sell a foul so convincingly that even the guy who "fouled" you starts apologizing. Your highlight reel is 90% acting and 10% actual basketball. Hollywood called — they want you for the next action movie. The NBA fines committee has a poster of your face on their wall.' },
    DAWG:  { code: 'DAWG',  name: 'The Junkyard Dog',      tagline: 'Can\'t shoot, won\'t stop fighting.', desc: 'You can\'t shoot, your handles are questionable, and your offensive game is best described as "chaotic energy." But NOBODY outworks you. Every rebound is a personal vendetta. Every loose ball is an insult to your family name. You\'ll guard the best player and make his life miserable through sheer willpower and a complete disregard for your own body. Skill is temporary. DOG is forever.' },
    CHEF:  { code: 'CHEF',  name: 'The Splash Wizard',     tagline: 'Shooting from the parking lot.', desc: 'Deep threes are your love language. The mid-range is for people who lack vision. The paint is for people who lack range. You shoot from the parking lot, from the logo, from places that make your teammates yell "NO! NO! NO!... nice." Your form is butter. Your release is quick. Your conscience about shot selection? Nonexistent. If the gym has a roof, you\'re in range.' },
    STAT:  { code: 'STAT',  name: 'The Box Score Hunter',  tagline: 'Triple-double is a lifestyle.', desc: 'You don\'t play basketball. You play stat sheet. Every rebound is counted. Every assist is logged. You know your shooting percentage mid-game. You\'ve gotten a triple-double in a pickup game that nobody was keeping stats for — except you, on your phone, between possessions. Winning is nice, but have you ever had 12/10/10 in a losing effort? That\'s the real victory.' },
    GOAT:  { code: 'GOAT',  name: 'Self-Proclaimed Greatest', tagline: 'I\'m the best here. I said what I said.', desc: 'You have compared yourself to LeBron James in a YMCA pickup game. Unironically. You call yourself "a problem" after hitting one fadeaway. Your confidence-to-skill ratio is the most lopsided stat in basketball history. But here\'s the thing — that unshakeable self-belief? It actually helps sometimes. Delusion is a performance-enhancing drug, and you are on an IV drip.' },
    LOAD:  { code: 'LOAD',  name: 'The Load Manager',      tagline: 'Saving energy for the playoffs (there are no playoffs).', desc: 'You play basketball the way a luxury car drives — smooth, efficient, and never above the speed limit. Why sprint when you can jog? Why jump when you can reach? You\'re not lazy — you\'re "strategic." You\'re "preserving your body." It\'s a Tuesday night pickup game and you\'re talking about "load management." Kawhi Leonard didn\'t die for this. Actually, wait — this is exactly what Kawhi would do.' },
    DIME:  { code: 'DIME',  name: 'The Pass-First God',    tagline: 'I\'d rather die than take an open layup.', desc: 'You have an open layup. You pass. You have a wide-open three. You pass. A teammate literally begs you to shoot. You pump fake and pass. Your assist-to-shot ratio is illegal in most countries. You call yourself "a facilitator" but really you just have a paralyzing fear of scoring. Chris Paul weeps watching you — not because you\'re good, but because you\'ve taken his thing too far.' },
    DUNK:  { code: 'DUNK',  name: 'The Poster Machine',    tagline: 'If it\'s not a poster, it\'s not worth it.', desc: 'Layups? Boring. Mid-range? Irrelevant. Three-pointers? Cowardly. You only recognize one shot: the thunderous, rim-rattling, posterizing dunk. Every drive to the basket is an attempt to end someone\'s career. You\'ve been blocked 400 times going for dunks you had no business attempting, but that one time you caught a body? Legendary. You\'re basically a highlight reel with legs.' },
    ANKL:  { code: 'ANKL',  name: 'The Crossover Merchant', tagline: 'Between the legs, behind the back — all unnecessary, all beautiful.', desc: 'You\'ve broken more ankles than an orthopedic surgeon. Your dribble moves have dribble moves. Between the legs, behind the back, spin move, hesitation, shamgod — all in one possession, all completely unnecessary, all absolutely beautiful. You might not score, but everyone watching will say "ohhhhh." And isn\'t that what basketball is really about? Style points? Yes. The answer is yes.' },
    REFS:  { code: 'REFS',  name: 'The Rules Lawyer',      tagline: '"AND ONE!" — on a wide open layup.', desc: 'You\'ve argued more calls than you\'ve made baskets. Every drive is accompanied by an "AND ONE!" regardless of whether contact occurred. You know the rulebook better than most actual referees. You\'ve called a carrying violation in a pickup game. A CARRYING VIOLATION. Your teammates secretly wish you\'d spend half the energy you use arguing on actually playing basketball.' },
    TANK:  { code: 'TANK',  name: 'The Immovable Object',  tagline: 'Physics is my best move.', desc: 'You plant yourself in the post like an ancient redwood tree. People don\'t go around you — they bounce off you. Your offensive game is simple: catch, turn, use your body mass as a weapon. You set screens that should require a building permit. You\'ve never run a fast break in your life, and you never will. The paint is your kingdom, and you defend it with the gravitational pull of a small planet.' },
    HEAT:  { code: 'HEAT',  name: 'The Streaker',          tagline: 'No in between. Hot or absolutely freezing.', desc: 'When you\'re hot, you\'re the best player on the planet. Steph Curry wishes. When you\'re cold, you might be the worst player who has ever lived. There is absolutely no middle ground. Your teammates never know which version is showing up. Your hot streaks are the stuff of legend — 7 threes in a row, can\'t miss, feeling like a god. Your cold streaks are war crimes. You are chaos incarnate.' },
    POST:  { code: 'POST',  name: 'The Influencer',        tagline: 'Here for the \'gram, not the W.', desc: 'You showed up in a $300 outfit to play basketball in a public park. Your pregame routine includes finding the best lighting for your Instagram story. You shoot with one hand because the other is holding your phone. You called a timeout to fix your hair. Your sneakers are worth more than most people\'s rent, and you\'re terrified of scuffing them. Are you here to ball or to build your personal brand? Both. The answer is both.' },
    YELL:  { code: 'YELL',  name: 'The Sideline Coach',    tagline: 'Haven\'t played in years. Opinions about everything.', desc: 'You haven\'t touched a basketball in three years, but you have Strong Opinions about everyone\'s shooting form, defensive stance, and life choices. You coach from the sideline like it\'s Game 7 of the Finals. "ROTATE!" "BOX OUT!" "MOVE THE BALL!" You\'ve never demonstrated any of these things yourself. You are the basketball equivalent of a food critic who can\'t cook.' },
    SWAT:  { code: 'SWAT',  name: 'The Eraser',            tagline: 'Offense is someone else\'s problem.', desc: 'Your hobby is sending people\'s shots into the fifth row. You live for the block. The swat. The rejection. You don\'t care about scoring — that\'s for lesser beings. Your job is to make people afraid to enter the paint. You\'ve blocked shots so hard that the shooter reconsidered their entire basketball career. Offense? Never heard of her. You are the wall. The eraser. The final boss of the paint.' },
    TOWL:  { code: 'TOWL',  name: 'The Hype Man',          tagline: 'The emotional backbone nobody asked for.', desc: 'You ride the bench, but NOBODY celebrates harder. Every made basket gets a standing ovation. Every block gets a primal scream. You wave towels with the intensity of a helicopter rotor. Your teammates sometimes score just to see your reaction. You may not contribute points, but you contribute ENERGY. You are the soul of the team. The vibes curator. The minister of morale. And honestly? That matters more than buckets.' },
    BALL:  { code: 'BALL',  name: 'The Ball Hog',          tagline: '"Pass" is not in my vocabulary.', desc: 'Once the ball touches your hands, it enters a gravitational singularity from which no pass can escape. Your teammates have started calling you "the black hole" and you think it\'s a compliment. You call for the ball on every possession, even when triple-teamed. "Pass? What pass?" you say, launching a contested fadeaway over three defenders. You firmly believe the team\'s best offense is you doing everything yourself. Strangely, you\'re not always wrong.' },
    HUGG:  { code: 'HUGG',  name: 'The Ball Hugger',       tagline: 'The ball is my emotional support animal.', desc: 'The ball is not a shared resource — it\'s YOUR security blanket. You dribble for 20 seconds of a 24-second shot clock, execute seven between-the-legs moves that go absolutely nowhere, then panic-pass to the nearest teammate with 2 seconds left. "I was looking for the right play," you say, as your teammates age visibly. You\'re not selfish — you\'re "methodical." You\'re not holding the ball hostage — you\'re "reading the defense." The defense, for the record, has been set for 15 seconds. They\'ve had time to read a book.' },
  },
  zh: {
    KOBE:  { code: 'KOBE',  name: 'KOBE（曼巴）',           tagline: '曼巴精神。永不休息。', desc: '你不只是打篮球——你就是篮球本球。你热身之前还要热身。每一个回合都事关生死。你看了科比退役演讲47遍，每次都哭了。队友对你又敬又怕。你最早到最晚走，并且鄙视所有不这样做的人。球场对你来说不只是球场——它是圣殿，而你是篮球的大祭司。' },
    BRICK: { code: 'BRICK', name: 'BRICK（铁匠）',          tagline: '你不出手的球100%投不进。出手的也是。', desc: '你不出手的球100%投不进。你出手的球大约85%也投不进。但重点是——投手就是要投。这就是投手做的事。而你毫无疑问是一个投手。队友已经不给你传球了，但这没有减缓你的节奏，因为你自己运球过来就投了。某个篮筐正在对你申请禁止令。' },
    BENCH: { code: 'BENCH', name: 'BENCH（板凳王）',         tagline: '我的球衣是全队最干净的。', desc: '你已经将板凳艺术修炼到了极致。你的球衣一尘不染。你的球鞋毫无磨损。你挥毛巾的热情比大多数人一辈子对任何事的热情都要高。你是球队的精神支柱——从场边。有些战士战斗，你……观战。战略性地观战。' },
    FLOP:  { code: 'FLOP',  name: 'FLOP（影帝）',           tagline: '什么身体接触？*戏剧性倒地*', desc: '你的假摔次数比整个奥运游泳队的跳水加起来还多。一阵微风就能把你吹倒。你演犯规的能力如此逼真，连"犯规"的人都开始道歉了。你的集锦90%是演技，10%是真正的篮球。好莱坞打电话来了——他们要你出演下一部动作片。NBA罚款委员会墙上贴着你的照片。' },
    DAWG:  { code: 'DAWG',  name: 'DAWG（恶犬）',           tagline: '不会投，但永远不停战斗。', desc: '你不会投篮，你的运球令人存疑，你的进攻最好的形容是"混乱能量"。但没人比你更拼！每一个篮板都是私人恩怨。每一个地板球都是对你家族荣誉的侮辱。你会去防最强的人，用纯粹的意志力和对自己身体的完全无视让他生不如死。技术是暂时的，DOG是永恒的。' },
    CHEF:  { code: 'CHEF',  name: 'CHEF（厨神）',           tagline: '从停车场出手。', desc: '远距离三分球是你的爱情语言。中距离是给缺乏远见的人准备的。油漆区是给缺乏射程的人准备的。你从停车场投、从LOGO位置投、从那些让队友大喊"不要！不要！不……好球"的位置投。你的姿势如丝般顺滑。你的出手速度极快。你对出手选择的良心？不存在的。只要球馆有屋顶，你就在射程内。' },
    STAT:  { code: 'STAT',  name: 'STAT（数据刷）',         tagline: '三双是一种生活方式。', desc: '你不是在打篮球，你是在打数据表。每个篮板都在计数。每个助攻都有记录。你在比赛中就知道自己的命中率。你在一场没人统计数据的野球中拿到了三双——除了你自己，在回合间隙用手机记的。赢球不错，但你有没有在输球时拿到12/10/10？那才是真正的胜利。' },
    GOAT:  { code: 'GOAT',  name: 'GOAT（自封之王）',        tagline: '我是这里最强的。我说的。', desc: '你在YMCA的野球场上把自己和勒布朗·詹姆斯相提并论。认真的。你投进一个后仰就自称"大麻烦"。你的自信和技术之间的差距是篮球史上最悬殊的数据。但重点是——那种不可动摇的自我信念？有时候真的有用。妄想是一种增强表现的药物，而你正在打点滴。' },
    LOAD:  { code: 'LOAD',  name: 'LOAD（养生帝）',         tagline: '为季后赛蓄力（并没有季后赛）。', desc: '你打篮球的方式就像豪华轿车开车——平稳、高效、绝不超速。能慢跑为什么要冲刺？能伸手够到为什么要跳？你不是懒——你是"有策略"。你在"保护身体"。这是一场周二晚上的野球你在说"负荷管理"。伦纳德不是为了这个才……等等，这确实是伦纳德会做的事。' },
    DIME:  { code: 'DIME',  name: 'DIME（助攻王）',         tagline: '我宁愿死也不投空位上篮。', desc: '你有空位上篮的机会。你传球。你有大空位三分。你传球。队友求你出手。你假动作然后传球。你的助攻出手比在大多数国家都算违法。你自称"组织者"，但其实你只是有一种令人瘫痪的得分恐惧。保罗看你打球会哭——不是因为你好，而是因为你把他的事做过头了。' },
    DUNK:  { code: 'DUNK',  name: 'DUNK（暴扣兽）',         tagline: '不是暴扣就不值得。', desc: '上篮？无聊。中距离？无关。三分球？懦夫。你只认一种出手：雷霆万钧、震颤篮筐的死亡隔扣。每一次突破都是在试图终结某人的职业生涯。你冲击扣篮被盖了400次，那些扣篮你根本不该尝试，但那一次你成功骑扣了？传奇。你基本上就是一个长了腿的集锦。' },
    ANKL:  { code: 'ANKL',  name: 'ANKL（脚踝终结者）',      tagline: '胯下、背后——全是花活，全是艺术。', desc: '你比骨科医生弄断的脚踝还多。你的运球动作还有运球动作。胯下、背后、转身、犹豫步、山姆高德——全在一个回合里完成，全都完全没必要，全都绝对美丽。你可能不会得分，但所有看的人都会说"哦哦哦哦哦"。这不就是篮球的真谛吗？花式加分？是的。答案就是是的。' },
    REFS:  { code: 'REFS',  name: 'REFS（杠精）',           tagline: '"加一个！"——在空位上篮时喊的。', desc: '你吵的犯规比你进的球还多。每次突破都伴随着"AND ONE！"不管有没有身体接触。你比大多数真正的裁判更了解规则手册。你在野球中吹过翻腕违例。翻腕违例！你的队友暗暗希望你把吵架用的精力哪怕一半用来打球就好了。' },
    TANK:  { code: 'TANK',  name: 'TANK（坦克）',           tagline: '物理学是我最好的招式。', desc: '你在低位站得像一棵千年红杉。人们不是绕过你——他们弹开了。你的进攻很简单：接球、转身、用体重当武器。你做的掩护应该需要建筑许可证。你这辈子没跑过快攻，以后也不会。油漆区是你的王国，你用小行星般的引力守护着它。' },
    HEAT:  { code: 'HEAT',  name: 'HEAT（热区侠）',         tagline: '没有中间状态。要么滚烫要么冰冷。', desc: '你手感好的时候是全场最强。库里都得让位。你手感差的时候可能是人类历史上最差的球员。完全没有中间地带。你的队友永远不知道哪个版本的你会出现。你的火热状态是传说——连进7个三分，无所不进，感觉自己像神。你的冰冷状态属于战争罪。你就是混沌本尊。' },
    POST:  { code: 'POST',  name: 'POST（网红球员）',        tagline: '为了发朋友圈来的，不是为了赢球。', desc: '你穿着2000块的行头来公园打球。你的赛前准备包括找到最好的光线来拍Ins故事。你单手投篮因为另一只手在拿手机。你叫了暂停来整理发型。你的球鞋比大多数人的房租还贵，你生怕磨花了。你是来打球的还是来经营个人品牌的？都是。答案是都是。' },
    YELL:  { code: 'YELL',  name: 'YELL（场边教练）',        tagline: '好几年没打了。对什么都有意见。', desc: '你已经三年没碰过篮球了，但你对每个人的投篮姿势、防守站位和人生选择都有强烈意见。你从场边指挥得就像总决赛第七场。"轮转！""卡位！""传球！"你自己从来没有示范过这些东西。你就是篮球版的不会做饭的美食评论家。' },
    SWAT:  { code: 'SWAT',  name: 'SWAT（盖帽兽）',         tagline: '进攻是别人的事。', desc: '你的爱好是把别人的投篮扇到第五排。你为盖帽而活。那一巴掌。那记封盖。你不在乎得分——那是凡人的事。你的工作是让人害怕进入禁区。你盖过的帽让投篮者重新审视了自己整个篮球生涯。进攻？没听说过。你就是那堵墙。那块橡皮。禁区的最终BOSS。' },
    TOWL:  { code: 'TOWL',  name: 'TOWL（气氛组长）',        tagline: '没人要求但不可或缺的精神支柱。', desc: '你坐板凳，但没人比你庆祝更卖力。每个进球都能得到你的起立鼓掌。每个盖帽都能引发你的原始呐喊。你挥毛巾的强度堪比直升机旋翼。队友有时候进球就为了看你的反应。你可能不贡献得分，但你贡献能量。你是球队的灵魂。氛围策展人。士气部长。说实话？这比得分更重要。' },
    BALL:  { code: 'BALL',  name: 'BALL（黑洞）',           tagline: '"传球"不在我的词典里。', desc: '球一到你手里，就进入了一个没有传球能逃逸的引力奇点。队友开始叫你"黑洞"而你觉得这是夸奖。每个回合你都在要球，即使被三个人包夹。"传球？什么传球？"你说着，在三个防守人头上投出了一个高难度后仰。你坚信球队最好的进攻就是你一个人全包。奇怪的是，你也不总是错的。' },
    HUGG:  { code: 'HUGG',  name: 'HUGG（抱球怪）',        tagline: '这球是我的情感支柱。', desc: '篮球不是公共资源——它是你的安全毯。24秒进攻时间你运了20秒，执行了七个毫无意义的胯下运球，然后在最后2秒慌忙把球甩给最近的队友。"我在找合适的机会，"你说，而你的队友在肉眼可见地衰老。你不是自私——你是"有方法的"。你不是把球劫持了——你是在"解读防守"。防守，顺便说一下，已经站好了15秒了。他们都有时间读完一本书了。' },
  }
};

// ============================================================
//  Type patterns (language-independent)
// ============================================================

export const TYPE_PATTERNS = [
  { code: 'KOBE',  pattern: 'HHHHHH' },
  { code: 'BRICK', pattern: 'LMLMLM' },
  { code: 'BENCH', pattern: 'LLLLLL' },
  { code: 'FLOP',  pattern: 'LHHMHL' },
  { code: 'DAWG',  pattern: 'LHMLHM' },
  { code: 'CHEF',  pattern: 'HLLMLH' },
  { code: 'STAT',  pattern: 'HMHLLM' },
  { code: 'GOAT',  pattern: 'MMHMLM' },
  { code: 'LOAD',  pattern: 'HHMLLH' },
  { code: 'DIME',  pattern: 'LHMHHH' },
  { code: 'DUNK',  pattern: 'MLLHML' },
  { code: 'ANKL',  pattern: 'HMMHHH' },
  { code: 'REFS',  pattern: 'LMHMLM' },
  { code: 'TANK',  pattern: 'HMMLML' },
  { code: 'HEAT',  pattern: 'HLLHLH' },
  { code: 'POST',  pattern: 'LLHLLM' },
  { code: 'YELL',  pattern: 'LMHMLH' },
  { code: 'SWAT',  pattern: 'LHLLHM' },
  { code: 'TOWL',  pattern: 'LLHLML' },
  { code: 'BALL',  pattern: 'HLHMLM' },
  { code: 'HUGG',  pattern: 'MLHLLM' },
];

// Fallback type when no pattern matches well
export const FALLBACK_TYPE = {
  en: { code: 'WILD', name: 'The Unclassifiable', tagline: 'The system gave up.', desc: 'Congratulations — you broke the BBTI algorithm. Your basketball personality is so unique, so contradictory, so beautifully chaotic that no existing category can contain you. You\'re a walking paradox on the court. A ball-hogging facilitator. A lazy hustler. A confident mess. The basketball gods looked at you and said, "We don\'t have a box for that." Wear it as a badge of honor.' },
  zh: { code: 'WILD', name: 'WILD（不可分类体）', tagline: '系统放弃了。', desc: '恭喜——你把BBTI算法搞崩了。你的篮球人格如此独特、如此矛盾、如此美丽地混乱，以至于没有任何现有分类能装得下你。你是球场上的行走悖论。一个独占球权的组织者。一个偷懒的拼命三郎。一个自信满满的烂摊子。篮球之神看着你说："我们没有适合你的格子。"把这当作荣誉勋章吧。' },
};
