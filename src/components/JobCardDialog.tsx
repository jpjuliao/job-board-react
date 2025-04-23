import { Job } from '../models/job'
import * as Dialog from '@radix-ui/react-dialog'
import { useState, useContext } from 'react'
import { JobsContext } from '../context/JobsContext'
import { JobsContextType } from '../models/job'
import JobDetail from './JobDetail'
import JobForm from './JobForm'
import { JobType } from '../enums/jobTypes'

/**
 * A dialog component that displays a job's details and allows for editing.
 *
 * Props:
 * - job: The job data to display and edit.
 *
 * State:
 * - isEditing: Whether the job is currently being edited.
 *
 * Context:
 * - JobsContext: The context that provides the list of jobs and the function to update it.
 *
 * The dialog displays the job's details when not editing and displays a JobForm when editing.
 * The JobForm will submit the updated job data to the `onSubmit` callback, which will update the job in the context.
 *
 * The dialog can be closed by clicking the `Cancel` button or the overlay.
 */
export default function JobCardDialog({ job }: { job: Job }) {
  const [isEditing, setIsEditing] = useState(false)
  const { jobs, setJobs } = useContext(JobsContext) as JobsContextType

  const onSubmit = (data: Job) => {
    const updatedJob: Job = { ...job, ...data };
    console.log('Updated job:', updatedJob);
    const updatedJobs = jobs.map((j) => (j.id === job.id ? updatedJob : j));
    setJobs(updatedJobs);
    setIsEditing(false);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay fixed inset-0 bg-black/50" />
      <Dialog.Content className="DialogContent fixed top-[50%] left-[50%] max-h-full w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow text-gray-600">
        <Dialog.Close className="DialogClose absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Dialog.Close>
        <Dialog.Title className="DialogTitle text-lg font-bold">
          {isEditing ? 'Edit Job' : 'Job Details'}
        </Dialog.Title>
        <Dialog.Description className="DialogDescription mt-2 mb-4 text-sm text-gray-500">
          {isEditing ? 'Edit the job details below.' : 'View and edit the job details.'}
        </Dialog.Description>
        {isEditing ? (
          <JobForm
            defaultValues={{
              title: job.title,
              company: job.company,
              location: job.location,
              type: job.type as JobType,
              description: job.description,
            }}
            onSubmit={onSubmit}
            mode="edit" />
        ) : (
          <>
            <JobDetail job={job} />
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
          </>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  )
}