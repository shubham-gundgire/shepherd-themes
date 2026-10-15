import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Example from '../components/example/Example';
import { EXAMPLE_CSS, EXAMPLE_JS } from '../editorContent/exampleContent';
import { tourCards, clickCardButton } from '../testUtils/shepherd';

const code = (container) => container.querySelector('[class*="playGround"]').textContent;

test('shows the example App.js, step by step, and switches to app.css', () => {
  const { container } = render(<Example />);
  expect(code(container)).toContain('import Shepherd from "shepherd.js";');
  expect(code(container)).toContain('tour.addStep(tourStep);');
  // The highlighted steps the hero tour points at.
  for (let i = 1; i <= 5; i++) expect(container.querySelector(`.tour-step-${i}`)).toBeInTheDocument();

  fireEvent.click(screen.getByText('app.css'));
  expect(code(container)).toBe(EXAMPLE_CSS);
  expect(screen.getByText('app.css').style.color).toBe('black');
  expect(screen.getByText('App.js').style.color).toBe('white');

  fireEvent.click(screen.getByText('App.js'));
  expect(code(container)).toContain('renderToStaticMarkup');
});

test('the code shown matches the exported example', () => {
  const { container } = render(<Example />);
  const normalise = (s) => s.replace(/\s+/g, '');
  expect(normalise(EXAMPLE_JS)).toContain(normalise('import Shepherd from "shepherd.js";'));
  expect(normalise(code(container))).toContain(normalise('const tour = new Shepherd.Tour({'));
});

test('previews theme 5, with its Done and Cancel buttons', () => {
  render(<Example />);
  const [card] = tourCards();
  expect(card).toMatchObject({ theme: 'shepherd-theme-5', step: 'step-5', buttons: ['Done', 'Cancel'] });
  expect(card.text).toContain('Web Development');

  clickCardButton(card, 'Done');
  expect(card.el.isConnected).toBe(false);
});
