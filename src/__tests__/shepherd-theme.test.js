import React from 'react';
import { render } from '@testing-library/react';
import ShepherdTheme from '../components/ShepherdTheme';
import { tourCards, clickCardButton } from '../testUtils/shepherd';

test.each([1, 2, 3, 4, 5, 6])('theme %i starts a one-step tour styled with its theme class', (n) => {
  render(<ShepherdTheme themeId={n} />);
  const [card] = tourCards();
  expect(card).toMatchObject({ theme: `shepherd-theme-${n}`, step: `step-${n}` });
  expect(card.el.innerHTML).toContain(`t${n}-card`);
});

test('without attachTo it attaches to its own bullet', () => {
  const { container } = render(<ShepherdTheme themeId={1} />);
  const bullet = container.querySelector('.bullet');
  const ownClass = [...bullet.classList].find((c) => /^bullet-\d+$/.test(c));
  const Shepherd = require('shepherd.js');
  expect(Shepherd.activeTour.getCurrentStep().options.attachTo.element).toBe(`.${ownClass}`);
});

test('with attachTo it attaches to that class', () => {
  render(
    <div className="here">
      <ShepherdTheme themeId={4} attachTo="here" />
    </div>
  );
  const Shepherd = require('shepherd.js');
  expect(Shepherd.activeTour.getCurrentStep().options.attachTo).toEqual({ element: '.here', on: 'top-left' });
});

test.each([
  [1, 'BACK'],
  [1, 'NEXT'],
  [6, 'Done'],
])('theme %i: "%s" ends the one-step tour', (n, label) => {
  render(<ShepherdTheme themeId={n} />);
  const [card] = tourCards();
  clickCardButton(card, label);
  expect(card.el.isConnected).toBe(false);
});

test('theme 3 can be closed with its close icon', () => {
  render(<ShepherdTheme themeId={3} />);
  const [card] = tourCards();
  card.el.querySelector('.t3-close-btn').dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(card.el.isConnected).toBe(false);
});
