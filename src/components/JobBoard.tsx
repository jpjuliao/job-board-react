import { Job } from '../models/job'
import JobCard from './JobCard'
import JobForm from './JobForm'
import { jobSchema } from '../schemas/jobSchema'
import { z } from 'zod'
import { JobsContext } from './JobsContext'
import { useContext } from 'react'
import { JobsContextType } from '../models/job'

type JobFormInputs = z.infer<typeof jobSchema>;

/**
 * Displays a list of jobs using mock data.
 *
 * @returns A React element for the job board.
 */
export default function JobBoard() {
  const { jobs, setJobs } = useContext(JobsContext) as JobsContextType

  /**
   * Logs the submitted job to the console.
   *
   * @param {JobFormInputs} data The submitted job data.
   */
  const handleJobSubmit = (data: JobFormInputs) => {
    console.log("Submitted job:", data);

    const newJob: Job = {
      id: Math.random().toString(36).slice(2, 9),
      title: data.title,
      company: data.company,
      location: data.location,
      type: data.type,
      description: data.description,
    };

    setJobs([...jobs, newJob]);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
        {jobs.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
        <JobForm onSubmit={handleJobSubmit} />
      </div>
    </>
  )
}