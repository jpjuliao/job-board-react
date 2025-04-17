import { Job } from '../models/job';

interface JobDetailProps {
  job: Job;
}

/**
 * A React component that displays details about a job.
 *
 * The component receives a single prop, `job`, which is an object that
 * contains the details of the job to be displayed. The component displays
 * the job's title, company, location, type, and description.
 *
 * @param {JobDetailProps} props - The component props.
 * @param {Job} props.job - The job details to display.
 * @returns {React.ReactElement} A React element representing the job details.
 */
const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
  return (
    <>
      <h2 className="text-gray-800 text-lg font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-600">{job.type}</p>
      <p className="text-gray-600">{job.description}</p>
    </>
  );
};

export default JobDetail;