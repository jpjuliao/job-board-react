interface JobFilterProps {
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

/**
 * A select component for filtering jobs by type.
 *
 * @param {JobFilterProps} props The component props.
 * @param {string | null} props.value The selected value, or `null` if no value is selected.
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} props.onChange The callback function to call when the selected value changes.
 * @param {{ value: string; label: string }[]} props.options The options for the select component.
 * @returns {React.ReactElement} A React element representing the select component.
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