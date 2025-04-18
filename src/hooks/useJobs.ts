import { useContext, useState } from 'react';
import { JobsContext } from '../context/JobsContext';
import { JobsContextType } from '../models/job';
import { Job } from '../models/job';
import { JobType } from '../enums/jobTypes';

/**
 * Hook that provides the current list of jobs and a function to update the list.
 * Additionally, it provides a filtered version of the list, filtered by job type.
 * The hook also handles job submissions and adds the new job to the list.
 *
 * @returns An object with the following properties:
 * - jobs: The current list of jobs.
 * - filteredJobs: The filtered version of the list, filtered by job type.
 * - selectedJobType: The currently selected job type.
 * - setSelectedJobType: A function to update the currently selected job type.
 * - handleJobSubmit: A function to handle job submissions and add the new job to the list.
 */
const useJobs = () => {
  const { jobs, setJobs } = useContext(JobsContext) as JobsContextType;
  const [selectedJobType, setSelectedJobType] = useState<string | null>(null);

  const filteredJobs = selectedJobType ? jobs.filter((job) => job.type === selectedJobType) : jobs;

  const jobTypes = [
    { value: "", label: "All" },
    { value: JobType.FULL_TIME, label: JobType.FULL_TIME },
    { value: JobType.PART_TIME, label: JobType.PART_TIME },
    { value: JobType.CONTRACT, label: JobType.CONTRACT },
    { value: JobType.INTERNSHIP, label: JobType.INTERNSHIP },
  ];

  const handleJobSubmit = (data: Job) => {
    console.log("Submitted job:", data);

    const newJob: Job = {
      id: Math.random().toString(36).slice(2, 9),
      title: data.title,
      company: data.company,
      location: data.location,
      type: data.type,
      description: data.description,
    };

    setJobs([...jobs, newJob]);
  };

  return {
    jobs,
    filteredJobs,
    selectedJobType,
    setSelectedJobType,
    handleJobSubmit,
    jobTypes
  };
};

export default useJobs;