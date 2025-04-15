import { render, fireEvent } from '@testing-library/react';
import JobBoard from './JobBoard';
import { JobsProvider } from '../context/JobsContext';
import '@testing-library/jest-dom';

describe('JobBoard component', () => {
  it('renders job list', () => {
    const { getByText } = render(<JobsProvider><JobBoard /></JobsProvider>);
    expect(getByText('Available Jobs')).toBeInTheDocument();
  });

  it('renders job cards', () => {
    const { getAllByRole } = render(<JobsProvider><JobBoard /></JobsProvider>);
    expect(getAllByRole('button')).toHaveLength(2);
  });

  it('filters jobs by type', () => {
    const { getByText, getByRole } = render(<JobsProvider><JobBoard /></JobsProvider>);
    const selectElement = getByRole('select');
    fireEvent.change(selectElement, { target: { value: 'Full-time' } });
    expect(getByText('Full-time')).toBeInTheDocument();
  });
});