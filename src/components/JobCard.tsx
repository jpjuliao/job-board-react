import { Job } from '../models/job'
import Modal from './Modal';

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
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-gray-800 text-lg font-semibold">{job.title}</h2>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
        <p className="text-gray-600">{job.type}</p>
        <p className="text-gray-600">{job.description}</p>
      </div>
      <Modal job={job} />
    </>
  )
} 