import { z } from 'zod';

export const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  type: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export type JobFormInputs = z.infer<typeof jobSchema>;
