# Testing

The tests use the app's own `react-scripts` Jest with React Testing Library, both already
dependencies, so no package or lockfile changes were needed. The added files are
`src/setupTests.js`, `src/__tests__/` and `src/testUtils/`.

| Tests | Statements | Branches | Functions | Lines |
|------:|-----------:|---------:|----------:|------:|
|    37 |        96% |    84.4% |     94.6% |   96% |

(3 of the 37 are known bugs.) The uncovered branches cannot run:
- the hero and scratch-page close-button wiring, since no step has a `close-btn`
- the empty fallback in the JS/CSS switch
- `document?.` checks on a document that always exists

```bash
npm ci
CI=true npx react-scripts test --watchAll=false
CI=true npx react-scripts test --watchAll=false --coverage --collectCoverageFrom='src/**/*.{js,jsx}' \
  --collectCoverageFrom='!src/setupTests.js' --collectCoverageFrom='!src/__tests__/**' --collectCoverageFrom='!src/testUtils/**'
SHOW_BUGS=1 CI=true npx react-scripts test --watchAll=false   # known bugs as normal tests
```

Shepherd.js runs for real in jsdom; the tests read the tour cards it adds to `<body>` and press
their buttons. `setupTests.js` points the highlighter styles at the package's CommonJS build (the
app imports the ES-module build, which Jest cannot load) and removes tour cards between tests.

Covered:
- the page (header links, hero, example, theme list, `src/index.js`)
- the hero's guided tour and GitHub button
- the example's App.js/app.css tabs and its theme-5 preview
- opening and closing each theme's editor and switching its files
- every theme's card, buttons and close icon
- the copyable code for each theme
- the unused scratch page `src/test/Test.jsx`

## Known bugs

Each is a test of the correct behaviour that fails today, written with a `knownBug()` helper
(Jest 27, bundled with react-scripts 5, has no `test.failing`).

| Severity | Where | Bug |
|---|---|---|
| Medium | `src/thems/themContent.js` (theme 6) | Theme 6's code to copy is a copy of theme 5's: it uses `t5-card`/`t5-button` classes and Done + Cancel buttons, while the theme 6 preview is built from `t6-card` and a single Done button. Copying theme 6 gives you theme 5. |
| Low | `components/hero/Hero.jsx` | The tour is created once per page, and each click on "Explore Themes" adds all six steps again: the second click gives a 12-step tour that repeats itself. |
| Low | `components/ThemeEditor/ThemeEditor.jsx` | The preview gets a new random class on every render, but its tour was attached to the first one; switching between App.js and app.css leaves the tour card without its target. |

Also noted:
- **Tours start at load:** every theme's tour starts as the page loads (seven tour cards, the six off-screen editors included).
- **Duplicate step ids:** three hero steps share the id `step-id-1`.
- **Button wording:** in themes 1–4 "BACK" ends the tour, and in theme 5 "Cancel" moves to the next step and "Done" cancels.
- **Missing key:** `Theme.jsx` renders its list without `key`.
- **Invalid attributes:** the step markup uses `class` and `stroke-width` attributes in JSX, which React warns about.
- **Stray dependency:** `package.json` depends on the npm package `crypto` (a deprecated placeholder; Node's built-in `crypto` needs no install).
