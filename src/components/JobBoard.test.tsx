import { render, fireEvent, waitFor } from '@testing-library/react';
import JobBoard from './JobBoard';
import { JobsProvider } from '../context/JobsContext';
import '@testing-library/jest-dom';

describe('JobBoard component', () => {

  it('renders job list', () => {
    const { getByText } = render(
      <JobsProvider>
        <JobBoard />
      </JobsProvider>
    );
    expect(getByText('Available Jobs')).toBeInTheDocument();
  });

  it('renders job cards', () => {
    const { container } = render(
      <JobsProvider>
        <JobBoard />
      </JobsProvider>
    );
    expect(container.querySelectorAll('.job-card').length).toBe(2);
  });

  it('renders filter select', () => {
    const { container } = render(
      <JobsProvider>
        <JobBoard />
      </JobsProvider>
    );
    expect(container.querySelectorAll('.job-filter option').length).toBe(5);
  });

  it('renders job form', () => {
    const { getByText } = render(
      <JobsProvider>
        <JobBoard />
      </JobsProvider>
    );
    expect(getByText('Post a Job')).toBeInTheDocument();
  });

  it('submits job form', async () => {
    const { getByText, getByLabelText } = render(
      <JobsProvider>
        <JobBoard />
      </JobsProvider>
    );

    const titleInput = getByLabelText('Job Title');
    const companyInput = getByLabelText('Company');
    const locationInput = getByLabelText('Location');
    const typeSelect = getByLabelText('Job Type');
    const descriptionInput = getByLabelText('Description');
    const submitButton = getByText('Save Job');

    fireEvent.change(titleInput, { target: { value: 'Test Job' } });
    fireEvent.change(companyInput, { target: { value: 'Test Company' } });
    fireEvent.change(locationInput, { target: { value: 'Test Location' } });
    fireEvent.change(typeSelect, { target: { value: 'Full-time' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test description' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Test Job')).toBeInTheDocument();
    });
  });

});