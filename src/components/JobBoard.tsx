import { Jobs } from '../mocks/jobs'
import { Job } from '../models/job'
import JobCard from './JobCard'
import JobForm from './JobForm'
import { jobSchema } from '../schemas/jobSchema'
import { z } from 'zod'


type JobFormInputs = z.infer<typeof jobSchema>;

/**
 * Displays a list of jobs using mock data.
 *
 * @returns A React element for the job board.
 */
export default function JobBoard() {

  /**
   * Logs the submitted job to the console.
   *
   * @param {any} data The submitted job data.
   */
  const handleJobSubmit = (data: JobFormInputs) => {
    console.log("Submitted job:", data);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {Jobs.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <JobForm onSubmit={handleJobSubmit} />
      </div>
    </>
  )
}