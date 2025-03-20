import { useState } from "react";
import { X } from "lucide-react";
import TechTag from "../../shared/TechTag";

interface DesignProjectProps {
  title: string;
  image: string;
  description: string;
  tools: string[];
}

const DesignProjectCard = ({
  title,
  image,
  description,
  tools,
}: DesignProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-neutral-300 hover:bg-neutral-200 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 rounded-lg h-fit p-8  cursor-pointer"
      >
        {/* Project Title */}
        <h3 className="text-neutral-800 text-2xl font-bold mb-2">{title}</h3>
        {/* Project Description */}
        <p className="text-neutral-900 text-base mb-6">{description}</p>

        {/* Image Container */}
        <div className="relative w-full mb-4">
          <img
            src={image}
            alt={`${title} project`}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <TechTag
              key={index}
              name={tool}
              className="bg-secondary hover:bg-secondary-dark text-neutral-200"
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 lg:p-8"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative h-[90vh] flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              className="fixed top-4 right-4 text-white text-2xl px-3 py-2"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={image}
              alt={`${title} project expanded view`}
              className="max-h-full w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DesignProjectCard;
