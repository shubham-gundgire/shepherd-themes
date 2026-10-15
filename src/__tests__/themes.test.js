import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Theme from '../components/themes/Theme';
import { themeData } from '../thems/themContent';
import GetAllThems from '../thems/index';
import { tourCards } from '../testUtils/shepherd';
import { knownBug } from '../testUtils/knownBug';

const boxes = (container) => [...container.querySelectorAll('[class*="themecontainer"]')];
const open = (box) => fireEvent.click(box.querySelector('[class*="themeOverlay"]'));

test('lists the six themes as images, with their editors parked off-screen', () => {
  const { container } = render(<Theme />);
  expect(boxes(container)).toHaveLength(6);
  for (const box of boxes(container)) {
    expect(box.querySelector('img')).toBeInTheDocument();
    expect(box.lastElementChild).toHaveClass('hide');
  }
});

test('clicking a theme opens its code at full width; "Close Editor" closes it', () => {
  const { container } = render(<Theme />);
  const box = boxes(container)[1];
  open(box);

  expect(box.style.width).toBe('100%');
  expect(box.querySelector('img[alt="themes"]')).not.toBeInTheDocument();
  expect(box.lastElementChild).not.toHaveClass('hide');
  expect(box.textContent.replace(/\s+/g, '')).toContain(themeData[2].js.replace(/\s+/g, '').slice(0, 200));

  fireEvent.click(within(box).getByText('Close Editor'));
  expect(box.style.width).toBe('25%');
  expect(box.querySelector('img[alt="themes"]')).toBeInTheDocument();
  expect(box.lastElementChild).toHaveClass('hide');
});

test("the editor switches between the theme's App.js and app.css", () => {
  const { container } = render(<Theme />);
  const box = boxes(container)[3];
  open(box);
  const code = () => box.querySelector('pre').textContent;

  fireEvent.click(within(box).getByText('app.css'));
  expect(code()).toBe(themeData[4].css);
  fireEvent.click(within(box).getByText('App.js'));
  expect(code()).toBe(themeData[4].js);
});

test("each theme's close icon ends its preview tour (themes 2 and 3 have one)", () => {
  render(<Theme />);
  const card = tourCards().find((c) => c.theme === 'shepherd-theme-2');
  card.el.querySelector('.t2-close-btn').dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(card.el.isConnected).toBe(false);
});

describe('the theme content', () => {
  test('every theme has JS and CSS to copy, and a matching card', () => {
    expect(Object.keys(themeData)).toEqual(['1', '2', '3', '4', '5', '6']);
    const themes = GetAllThems();
    const tour = { cancel: jest.fn(), next: jest.fn() };
    for (const n of ['1', '2', '3', '4', '5']) {
      expect(themeData[n].js).toContain('new Shepherd.Tour');
      expect(themeData[n].css).toContain(`.t${n}-`);
      const { content, buttons } = themes[`t${n}`](tour);
      expect(content).toContain(`t${n}-card`);
      expect(buttons.length).toBeGreaterThan(0);
    }
  });

  test.each([
    ['t1', ['BACK', 'NEXT']],
    ['t2', ['BACK', 'NEXT']],
    ['t3', ['BACK', 'NEXT']],
    ['t4', ['BACK', 'NEXT']],
    ['t5', ['Done', 'Cancel']],
    ['t6', ['Done']],
  ])('%s has the buttons %j', (theme, labels) => {
    const tour = { cancel: jest.fn(), next: jest.fn() };
    expect(GetAllThems()[theme](tour).buttons.map((b) => b.text)).toEqual(labels);
  });
});

// FINDING: theme 6's code to copy (App.js and app.css) is a copy of theme 5's: it uses the
// t5-card / t5-button classes and Done + Cancel buttons, while the theme 6 preview is built from
// t6-card and a single Done button. Copying theme 6 gives you theme 5.
knownBug("theme 6's code to copy builds the theme 6 card", () => {
  const live = GetAllThems().t6({ cancel() {}, next() {} });
  expect(live.content).toContain('t6-card');
  expect(themeData[6].js).toContain('t6-card');
  expect(themeData[6].css).toContain('.t6-');
});

// FINDING: ThemeEditor gives the preview a new random class on every render, but the tour was
// attached (once) to the first one. Switching between App.js and app.css re-renders, and the
// tour card's target no longer exists.
knownBug("switching the editor's file keeps the preview attached", () => {
  const { container } = render(<Theme />);
  const box = boxes(container)[0];
  open(box);
  // The tour was attached to the preview's class at first render.
  const attachedTo = box.querySelector('#attachMe').className;
  fireEvent.click(within(box).getByText('app.css'));
  expect(box.querySelector(`.${attachedTo}`)).not.toBeNull();
});
