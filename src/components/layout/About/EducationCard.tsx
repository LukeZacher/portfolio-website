interface EducationCardProps {
  degree: string;
  degreeType: string;
  years: string;
  university: string;
  catalogUrl: string;
}

const EducationCard = ({
  degree,
  degreeType,
  years,
  university,
  catalogUrl,
}: EducationCardProps) => {
  return (
    <a
      href={catalogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-lg p-6 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-neutral-50 text-xl font-bold">
            {degree}, {degreeType}
          </h3>
          <p className="text-neutral-200">{years}</p>
        </div>
        <p className="text-neutral-200">{university}</p>
      </div>
    </a>
  );
};

export default EducationCard;
