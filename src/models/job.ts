import { JobFormInputs } from "../schemas/jobSchema";
import { JobType } from "../enums/jobTypes";

export interface Job {
  id?: string
  title: string
  company: string
  location: string
  type: JobType.FULL_TIME | JobType.PART_TIME | JobType.CONTRACT | JobType.INTERNSHIP
  description: string
}

export interface JobFormProps {
  defaultValues?: Partial<JobFormInputs>;
  onSubmit: (data: JobFormInputs) => void;
  mode?: "create" | "edit";
}

export interface JobsContextType {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
}

export interface JobProviderProps {
  children: React.ReactNode;
}