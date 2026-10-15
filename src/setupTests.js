// Loaded automatically by react-scripts before every test file.
import '@testing-library/jest-dom';

// The components import the highlighter styles from the package's ES-module build, which Jest
// (it does not transform node_modules) cannot load; use the package's CommonJS build instead.
jest.mock('react-syntax-highlighter/dist/esm/styles/hljs', () => jest.requireActual('react-syntax-highlighter/dist/cjs/styles/hljs'));

// Shepherd attaches its tour cards to <body>, outside what Testing Library cleans up; remove
// them (and end any running tour) between tests.
afterEach(() => {
  const Shepherd = require('shepherd.js');
  Shepherd.activeTour?.cancel();
  document.querySelectorAll('.shepherd-element, .shepherd-modal-overlay-container').forEach((el) => el.remove());
});
