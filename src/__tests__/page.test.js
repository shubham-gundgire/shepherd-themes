import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { tourCards } from '../testUtils/shepherd';

test('shows the header, hero, example and theme list', () => {
  render(<App />);

  expect(screen.getByText('ShepherdThemes', { selector: 'div' })).toBeInTheDocument();
  const links = screen.getAllByRole('link').map((a) => a.getAttribute('href'));
  expect(links).toEqual(['https://shepherdjs.dev/', 'https://github.com/shubham-gundgire/shepherd-themes']);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Customizable ShepherdJS Themes for Perfect User Tours');
  expect(screen.getByText('How to Apply Themes in Your Code')).toBeInTheDocument();
  expect(screen.getByText('Themes')).toBeInTheDocument();
  expect(screen.getAllByAltText('themes').map((img) => img.getAttribute('src'))).toEqual(['/t1.png', '/t2.png', '/t3.png', '/t4.png', '/t5.png', '/t6.png']);
});

test('every theme preview (and the example) has its tour card ready as the page loads', () => {
  render(<App />);
  // The example (theme 5) plus one per theme; the editors holding them are parked off-screen.
  expect(tourCards().map((c) => c.theme)).toEqual([
    'shepherd-theme-5',
    'shepherd-theme-1',
    'shepherd-theme-2',
    'shepherd-theme-3',
    'shepherd-theme-4',
    'shepherd-theme-5',
    'shepherd-theme-6',
  ]);
});

test('src/index.js renders the app into #root', async () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  const { act } = require('react-dom/test-utils');
  // React 18's createRoot renders asynchronously.
  await act(async () => {
    require('../index');
  });
  expect(root.textContent).toContain('How to Apply Themes in Your Code');
  root.remove();
});
