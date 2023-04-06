// import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/App';

it('can navigate between main and profilew pages', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  // expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await act(async () => {
    fireEvent.click(screen.getByText('main'));
  });
  await act(async () => {
    await screen.findByText(/main-content/i);
  });
  expect(screen.getByText(/main-content/i)).toBeInTheDocument();

  await act(async () => {
    fireEvent.click(screen.getByText('profile'));
  });
  await act(async () => {
    await screen.findByText(/profile-content/i);
  });
  expect(screen.getByText(/profile-content/i)).toBeInTheDocument();

});
