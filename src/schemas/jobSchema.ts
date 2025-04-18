import { z } from 'zod';
import { JobType } from '../enums/jobTypes';

export const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  type: z.enum([JobType.FULL_TIME, JobType.PART_TIME, JobType.CONTRACT, JobType.INTERNSHIP]),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export type JobFormInputs = z.infer<typeof jobSchema>;
