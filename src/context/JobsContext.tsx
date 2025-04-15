import { createContext, useState } from 'react';
import { Jobs } from '../mocks/jobs';
import { Job } from '../models/job';
import { JobsContextType, JobProviderProps } from '../models/job';

const JobsContext = createContext<JobsContextType | null>(null);

/**
 * Provides the `JobsContext` context for the entire app.
 *
 * The `JobsProvider` component wraps the entire app and provides the
 * `JobsContext` context to all components.
 *
 * The `JobsContext` context contains the current jobs list and a function to
 * update the jobs list.
 *
 * @param {JobProviderProps} props The props object.
 * @param {React.ReactNode} props.children The children to render.
 * @returns {React.ReactNode} The rendered component.
 */
const JobsProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(Jobs);
  
  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export { JobsProvider, JobsContext };