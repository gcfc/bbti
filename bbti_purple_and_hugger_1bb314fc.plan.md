---
name: BBTI Purple and Hugger
overview: Switch the BBTI color palette from orange to purple, and add a new "HUGG" (The Ball Hugger) personality type -- a selfish dribbler who hoards possession without necessarily shooting.
todos:
  - id: purple-theme
    content: Change all colors in style.css from orange/warm to purple/cool palette
    status: completed
  - id: hugg-type
    content: Add HUGG (Ball Hugger / 抱球怪) type to TYPE_LIBRARY (en + zh), TYPE_PATTERNS, and update stat count to 21
    status: completed
isProject: false
---

# BBTI: Purple Theme + Ball Hugger Type

## 1. Change primary color to purple

Update CSS variables and all hardcoded color values in [bbti/style.css](bbti/style.css):

- `--accent`: `#e87a2e` -> `#7c3aed` (vivid purple)
- `--accent-strong`: `#c4601a` -> `#5b21b6` (deep purple)
- `--accent-glow`: `rgba(232, 122, 46, 0.12)` -> `rgba(124, 58, 237, 0.12)`
- `--shadow`: `rgba(80, 50, 20, 0.07)` -> `rgba(60, 30, 100, 0.07)`
- `--bg`: `#faf6f1` -> `#f8f6fc` (cool off-white with a purple tint)
- `--soft`: `#f5efe7` -> `#f0ecf9`
- `--line`: `#e8ddd0` -> `#ddd6f0`
- `--text`: `#2a1f14` -> `#1e1533`
- `--muted`: `#7a6e62` -> `#6b6080`

Also update inline color references in gradients (progress bar, dim bar fills, card backgrounds, hover states, etc.) to purple equivalents.

## 2. Add new personality type: HUGG (The Ball Hugger / 抱球怪)

This is distinct from BALL (The Ball Hog / 黑洞). BALL is a high-volume shooter who never passes. **HUGG** is a selfish possessor who dribbles endlessly, kills the shot clock, and treats the ball like a comfort object -- but doesn't necessarily shoot much. Think of the guy who pounds the ball for 20 seconds then makes a panicked pass at the last second.

**Pattern**: `MLHLLM` (S-D-E-H-I-C) -- Medium shot selection (holds ball, sometimes shoots), Low defense, High ego (it's MY ball), Low hustle, Low IQ (no awareness of clock or teammates), Medium clutch.

Changes in [bbti/i18n.js](bbti/i18n.js):

- Add `HUGG` to `TYPE_LIBRARY.en` and `TYPE_LIBRARY.zh`
- Add `{ code: 'HUGG', pattern: 'MLHLLM' }` to `TYPE_PATTERNS`
- Update `stat_types` in `STRINGS.en` and `STRINGS.zh` from `'20'` to `'21'`

English entry:

```javascript
HUGG: { code: 'HUGG', name: 'The Ball Hugger',
  tagline: 'The ball is my emotional support animal.',
  desc: 'The ball is not a shared resource — it\'s YOUR security blanket. You dribble for 20 seconds of a 24-second shot clock, execute seven between-the-legs moves that go absolutely nowhere, then panic-pass to the nearest teammate with 2 seconds left. "I was looking for the right play," you say, as your teammates age visibly. You\'re not selfish — you\'re "methodical." You\'re not holding the ball hostage — you\'re "reading the defense." The defense, for the record, has been set for 15 seconds. They\'ve had time to read a book.'
}
```

Chinese entry:

```javascript
HUGG: { code: 'HUGG', name: 'HUGG（抱球怪）',
  tagline: '这球是我的情感支柱。',
  desc: '篮球不是公共资源——它是你的安全毯。24秒进攻时间你运了20秒，执行了七个毫无意义的胯下运球，然后在最后2秒慌忙把球甩给最近的队友。"我在找合适的机会，"你说，而你的队友在肉眼可见地衰老。你不是自私——你是"有方法的"。你不是把球劫持了——你是在"解读防守"。防守，顺便说一下，已经站好了15秒了。他们都有时间读完一本书了。'
}
```

Also add `'HUGG'` to the preview cards array in [bbti/app.js](bbti/app.js) (line ~99) to show it on the landing page.