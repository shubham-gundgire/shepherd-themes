import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../components/hero/Hero';
import { tourCards, stubLocation } from '../testUtils/shepherd';
import { knownBug } from '../testUtils/knownBug';

const Shepherd = require('shepherd.js');

test('"Explore Themes" starts the six-step guided tour', () => {
  render(<Hero />);
  fireEvent.click(screen.getByText('Explore Themes'));

  // The tour is shared by the page (see the bug below); the click adds the last six steps.
  const added = Shepherd.activeTour.steps.slice(-6).map((step) => step.options.text);
  const titles = ['Custom Themes for Shepherd.js', 'Import the Shepherd.js library', 'Shepherd tour option', 'Start tour'];
  for (const title of titles) expect(added.some((text) => text.includes(title))).toBe(true);
  // Steps 1-3 all have the id "step-id-1" (harmless while the tour moves by position).
  expect(Shepherd.activeTour.steps.slice(-6).map((step) => step.id)).toEqual(['step-id-1', 'step-id-1', 'step-id-1', 'step-id-3', 'step-id-4', 'step-id-5']);
  const [first] = tourCards();
  expect(first.text).toContain('Custom Themes for Shepherd.js');
  expect(first.buttons.length).toBeGreaterThan(0);
});

test('the tour moves on with its buttons', () => {
  render(<Hero />);
  fireEvent.click(screen.getByText('Explore Themes'));
  const tour = Shepherd.activeTour;
  const buttons = tour.getCurrentStep().getElement().querySelectorAll('.shepherd-button');

  buttons[buttons.length - 1].click(); // the last button is "next"
  expect(tour.getCurrentStep().getElement().textContent).toContain('Import the Shepherd.js library');
});

test('the second button opens the GitHub repository', () => {
  const restore = stubLocation();
  try {
    render(<Hero />);
    fireEvent.click(screen.getByText('Shepherd Themes'));
    expect(window.location).toBe('https://github.com/shubham-gundgire/shepherd-themes');
  } finally {
    restore();
  }
});

test('shows four theme previews', () => {
  render(<Hero />);
  expect(screen.getAllByAltText('theme').map((i) => i.getAttribute('src'))).toEqual(['/t1.png', '/t2.png', '/t3.png', '/t5.png']);
});

// FINDING: the tour is created once for the page, and every click on "Explore Themes" adds
// all six steps again: the second click gives a 12-step tour that repeats itself.
knownBug('clicking "Explore Themes" again restarts the same six steps', () => {
  render(<Hero />);
  fireEvent.click(screen.getByText('Explore Themes'));
  const tour = Shepherd.activeTour;
  const before = tour.steps.length;
  tour.cancel();
  fireEvent.click(screen.getByText('Explore Themes'));
  expect(tour.steps.length).toBe(before);
});
