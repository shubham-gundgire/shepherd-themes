import React from 'react';
import { render } from '@testing-library/react';
import Test from '../test/Test';
import { tourCards, clickCardButton } from '../testUtils/shepherd';

// src/test/Test.jsx is a scratch page (its use in App.js is commented out). It starts a theme-5
// tour like the example.
test('the scratch page starts a theme-5 style tour', () => {
  const { container } = render(<Test />);
  expect(container.querySelector('.attachMe')).toBeInTheDocument();
  const [card] = tourCards();
  expect(card).toMatchObject({ step: 'step-id', buttons: ['Done', 'Cancel'] });
  expect(card.text).toContain('Web Development');
  clickCardButton(card, 'Cancel');
  expect(card.el.isConnected).toBe(false);
});
