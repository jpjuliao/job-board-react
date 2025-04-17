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
 * @param {string} [props.mode="create"] - The mode of the form, either "create" or "edit".
 * @returns A React element representing the job form.
 */
export default function JobForm({ defaultValues = {}, onSubmit, mode = "create" }: JobFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<JobFormInputs>({
    resolver: zodResolver(jobSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div>
        <label htmlFor="job-title">Job Title</label>
        <input
          {...register("title")}
          className="border rounded px-3 py-2 w-full"
          id="job-title"
          defaultValue={defaultValues.title}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="company">Company</label>
        <input
          {...register("company")}
          className="border rounded px-3 py-2 w-full"
          id="company"
          defaultValue={defaultValues.company}
        />
        {errors.company && <p className="text-red-500">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          {...register("location")}
          className="border rounded px-3 py-2 w-full"
          id="location"
          defaultValue={defaultValues.location}
        />
        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
      </div>

      <div>
        <label htmlFor="job-type">Job Type</label>
        <select {...register("type")} className="border rounded px-3 py-2 w-full" id="job-type" defaultValue={defaultValues.type}>
          <option value="">Select type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        {errors.type && <p className="text-red-500">{errors.type.message}</p>}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description")}
          className="border rounded px-3 py-2 w-full min-h-[100px]"
          id="description"
          defaultValue={defaultValues.description}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {mode === "create" ? "Create Job" : "Update Job"}
      </button>
    </form>
  );
}