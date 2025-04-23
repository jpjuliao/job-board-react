interface JobFilterProps {
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

/**
 * A select component for filtering jobs by type.
 */
const JobFilter: React.FC<JobFilterProps> = ({ value, onChange, options }) => {
  return (
    <select value={value || ""} onChange={onChange} className="job-filter">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default JobFilter;