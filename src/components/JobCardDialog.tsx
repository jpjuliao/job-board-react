import { Job } from '../models/job'
import * as Dialog from '@radix-ui/react-dialog'
import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { JobsContext } from '../context/JobsContext'
import { JobsContextType } from '../models/job'

export default function JobCardDialog({ job }: { job: Job }) {
  const [isEditing, setIsEditing] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<Job>({
    defaultValues: job,
  })
  const { jobs, setJobs } = useContext(JobsContext) as JobsContextType

  const onSubmit = (data: Job) => {
    console.log('Updated job:', data)
    const updatedJobs = jobs.map((j) => (j.id === job.id ? data : j))
    setJobs(updatedJobs)
    setIsEditing(false)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay fixed inset-0 bg-black/50" />
      <Dialog.Content className="DialogContent fixed top-[50%] left-[50%] max-h-full w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow text-gray-600">
        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Job Title</label>
              <input {...register('title')} className="border rounded px-3 py-2 w-full" />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>
            <div>
              <label>Company</label>
              <input {...register('company')} className="border rounded px-3 py-2 w-full" />
              {errors.company && <p className="text-red-500">{errors.company.message}</p>}
            </div>
            <div>
              <label>Location</label>
              <input {...register('location')} className="border rounded px-3 py-2 w-full" />
              {errors.location && <p className="text-red-500">{errors.location.message}</p>}
            </div>
            <div>
              <label>Job Type</label>
              <select {...register('type')} className="border rounded px-3 py-2 w-full">
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.type && <p className="text-red-500">{errors.type.message}</p>}
            </div>
            <div>
              <label>Description</label>
              <textarea {...register('description')} className="border rounded px-3 py-2 w-full" />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Changes
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </form>
        ) : (
          <>
            <h2 className="text-gray-800 text-lg font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-gray-600">{job.type}</p>
            <p className="text-gray-600">{job.description}</p>
            <button type="button" onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Job
            </button>
          </>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  )
}