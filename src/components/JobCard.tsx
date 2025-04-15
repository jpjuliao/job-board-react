import { Job } from '../models/job'

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-600">{job.type}</p>
      <p className="text-gray-600">{job.description}</p>
    </div>
  )
} 