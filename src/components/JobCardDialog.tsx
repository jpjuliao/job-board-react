import { Job } from '../models/job'
import * as Dialog from '@radix-ui/react-dialog'

export default function JobCardDialog({ job }: { job: Job }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay fixed inset-0 bg-black/50" />
      <Dialog.Content className="DialogContent fixed top-[50%] left-[50%] max-h-full w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow">
        <h2 className="text-gray-800 text-lg font-semibold">{job.title}</h2>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
        <p className="text-gray-600">{job.type}</p>
        <p className="text-gray-600">{job.description}</p>
      </Dialog.Content>
    </Dialog.Portal>
  )
}