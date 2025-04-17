import { JobFormInputs } from "../schemas/jobSchema";

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
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