import TechTag from "../../shared/TechTag";

interface ProgrammingProjectProps {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProgrammingProjectCard = ({
  title,
  image,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProgrammingProjectProps) => {
  const handleCardClick = () => {
    if (liveUrl) {
      window.open(liveUrl, "_blank", "noopener,noreferrer");
    } else if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-neutral-300 hover:bg-neutral-200 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 rounded-lg p-8 mb-8 cursor-pointer"
    >
      {/* Project Title */}
      <h3 className="text-neutral-800 text-2xl font-bold mb-2">{title}</h3>

      {/* Project Description */}
      <p className="text-neutral-900 text-base mb-6">{description}</p>

      {/* Project Image */}
      <div className="mb-6">
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      {/* Technologies Used */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechTag
              key={index}
              name={tech}
              className={
                "bg-secondary hover:bg-secondary-dark text-neutral-200"
              }
            />
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="flex gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-light hover:bg-primary text-neutral-50 px-4 py-2 rounded-md transition-colors duration-300"
          >
            View Project
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-light hover:bg-primary text-neutral-50 px-4 py-2 rounded-md transition-colors duration-300"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProgrammingProjectCard;
