import { render } from '@testing-library/react';
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
    expect(getAllByRole('button')).toHaveLength(3);
  });
});