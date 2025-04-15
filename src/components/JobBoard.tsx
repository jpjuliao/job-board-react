import { Job } from '../models/job'
import { jobs } from '../mocks/jobs'
import JobCard from './JobCard'

/**
 * Displays a list of jobs using mock data.
 *
 * @returns A React element for the job board.
 */
export default function JobBoard() {
  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job: Job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}