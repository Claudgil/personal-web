interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
}

const ProgressBar = ({ label, percentage, color = 'primary' }: ProgressBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
          {label}
        </span>
        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-secondary-100 dark:bg-secondary-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full bg-${color}-500`} 
          style={{ width: `${percentage}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;