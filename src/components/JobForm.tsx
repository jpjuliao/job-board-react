import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema, JobFormInputs } from "../schemas/jobSchema";
import { JobFormProps } from "../models/job";

/**
 * Form component for creating or updating a job.
 *
 * @param {JobFormProps} props - The properties object.
 * @param {JobFormInputs} [props.defaultValues={}] - The default values for the form fields.
 * @param {(data: JobFormInputs) => void} props.onSubmit - The callback function to call when the form is submitted.
 * @returns A React element representing the job form.
 */
export default function JobForm({ defaultValues = {}, onSubmit }: JobFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<JobFormInputs>({
    resolver: zodResolver(jobSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label>Job Title</label>
        <input
          {...register("title")}
          className="border rounded px-3 py-2 w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label>Company</label>
        <input
          {...register("company")}
          className="border rounded px-3 py-2 w-full"
        />
        {errors.company && <p className="text-red-500">{errors.company.message}</p>}
      </div>

      <div>
        <label>Location</label>
        <input
          {...register("location")}
          className="border rounded px-3 py-2 w-full"
        />
        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
      </div>

      <div>
        <label>Job Type</label>
        <select {...register("type")} className="border rounded px-3 py-2 w-full">
          <option value="">Select type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        {errors.type && <p className="text-red-500">{errors.type.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <textarea
          {...register("description")}
          className="border rounded px-3 py-2 w-full min-h-[100px]"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {isSubmitting ? "Saving..." : "Save Job"}
      </button>
    </form>
  );
}
