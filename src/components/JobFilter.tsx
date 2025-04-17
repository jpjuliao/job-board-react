interface JobFilterProps {
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const JobFilter: React.FC<JobFilterProps> = ({ value, onChange }) => {
  return (
    <select value={value || ""} onChange={onChange} className="job-filter">
      <option value="">All</option>
      <option value="Full-time">Full-time</option>
      <option value="Part-time">Part-time</option>
      <option value="Contract">Contract</option>
      <option value="Internship">Internship</option>
    </select>
  );
};

export default JobFilter;