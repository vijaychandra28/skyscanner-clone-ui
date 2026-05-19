import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-calendar
jest.mock('react-calendar', () => {
  return function MockCalendar() {
    return <div>Calendar Component</div>;
  };
});

describe('App Component', () => {
  test('renders Flight Schedule heading', () => {
    render(<App />);

    const heading = screen.getByText(/Flight Schedule/i);

    expect(heading).toBeInTheDocument();
  });

  test('renders calendar component', () => {
    render(<App />);

    const calendar = screen.getByText(/Calendar Component/i);

    expect(calendar).toBeInTheDocument();
  });

  test('renders Continue button', () => {
    render(<App />);

    const button = screen.getByRole('button', {
      name: /Continue/i,
    });

    expect(button).toBeInTheDocument();
  });
});