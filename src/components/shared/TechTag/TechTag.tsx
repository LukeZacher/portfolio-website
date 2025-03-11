interface TechTagProps {
  name: string;
  className?: string;
}

const TechTag = ({ name, className = "" }: TechTagProps) => {
  return (
    <span
      className={`transition-colors duration-150 px-3 py-1 rounded-md text-sm ${className}`}
    >
      {name}
    </span>
  );
};

export default TechTag;
