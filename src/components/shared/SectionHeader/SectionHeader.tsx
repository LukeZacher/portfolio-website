interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-neutral-50 text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
        {title}
      </h1>
      <p className="text-neutral-200 text-base sm:text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
