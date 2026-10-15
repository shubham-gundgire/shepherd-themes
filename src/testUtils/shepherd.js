// Helpers for reading the tour cards Shepherd adds to <body>.

/** Every tour card on the page: its theme, step id, button labels and text. */
export function tourCards() {
  return [...document.querySelectorAll('.shepherd-element')].map((el) => ({
    el,
    theme: [...el.classList].find((c) => c.startsWith('shepherd-theme-')),
    step: el.getAttribute('data-shepherd-step-id'),
    buttons: [...el.querySelectorAll('.shepherd-button')].map((b) => b.textContent),
    text: el.querySelector('.shepherd-text')?.textContent ?? '',
  }));
}

/** The card for a step id (the last one, if several were created). */
export function cardFor(step) {
  const cards = tourCards().filter((c) => c.step === step);
  return cards[cards.length - 1];
}

/** Clicks a card's button by its label. */
export function clickCardButton(card, label) {
  [...card.el.querySelectorAll('.shepherd-button')].find((b) => b.textContent === label).click();
}

/**
 * The app navigates with `window.location = ...`, which jsdom cannot do. This swaps in a plain
 * object for the test and restores the real one afterwards.
 */
export function stubLocation() {
  const original = window.location;
  delete window.location;
  window.location = { href: 'http://localhost/' };
  return () => {
    window.location = original;
  };
}
