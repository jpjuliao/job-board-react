import JobCard from './JobCard'
import JobForm from './JobForm'
import JobFilter from './JobFilter'
import useJobs from '../hooks/useJobs'

/**
 * Displays a list of jobs using mock data.
 *
 * @returns A React element for the job board.
 */
export default function JobBoard() {
  const { filteredJobs, selectedJobType, setSelectedJobType, handleJobSubmit } = useJobs();

  const jobTypes = [
    { value: "", label: "All" },
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
      <JobFilter
        value={selectedJobType}
        onChange={(e) => setSelectedJobType(e.target.value)}
        options={jobTypes}
      />
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <h2 className="text-2xl font-bold mt-4">Post a Job</h2>
      <JobForm onSubmit={handleJobSubmit} />
    </div>
  );
}