import { Job } from '../models/job'
import { Dialog } from 'radix-ui'
import JobCardDialog from './JobCardDialog'
import JobDetail from './JobDetail'

/**
 * Component to display job details in a card format.
 *
 * @param {Object} props - The properties object.
 * @param {Job} props.job - The job data to display, including title, company, location, type, and description.
 * @returns A React element representing a job card with job details.
 */
export default function JobCard({ job }: { job: Job }) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="job-card bg-white p-4 rounded shadow">
            <JobDetail job={job} />
          </div>
        </Dialog.Trigger>
        <JobCardDialog job={job} />
      </Dialog.Root>
    </>
  )
} 