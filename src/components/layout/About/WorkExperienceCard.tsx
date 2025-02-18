interface WorkExperienceProps {
  jobTitle: string;
  company: string;
  location: string;
  jobType: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skillsUsed: string[];
  companyLogo: string;
}

const WorkExperienceCard = ({
  jobTitle,
  company,
  location,
  jobType,
  startDate,
  endDate,
  responsibilities,
  skillsUsed,
  companyLogo,
}: WorkExperienceProps) => {
  return (
    <div className="bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-lg p-6 mb-4 lg:mb-8">
      <div className="flex flex-col mb-4">
        {/* Company information header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          {/* Company information and job title */}
          <div className="flex items-center gap-4">
            <img
              src={companyLogo}
              alt={"${company} logo"}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="text-neutral-50 text-base lg:text-xl font-bold mb-1">
                {jobTitle}
              </h3>
              <p className="text-secondary text-sm sm:text-base">
                {company} • {location}
              </p>
            </div>
          </div>
          {/* Job Type & Dates */}
          <div className="flex flex-col">
            <p className="text-neutral-50 text-sm lg:text-base lg:text-right">
              {jobType}
            </p>
            <p className="text-neutral-50 text-sm lg:text-base lg:text-right">
              {startDate} - {endDate}
            </p>
          </div>
        </div>
        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="text-neutral-50 font-medium mb-2">Responsibilities</h4>
          <ul className="list-disc list-inside space-y-1">
            {responsibilities.map((responsibility, index) => (
              <li
                key={index}
                className="text-neutral-200 text-[15px] lg:text-base"
              >
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        {/* Skills Used */}
        <div>
          <h4 className="text-neutral-50 font-medium mb-2">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillsUsed.map((skill, index) => (
              <span
                key={index}
                className="bg-primary-light hover:bg-primary transition-colors duration-150 px-3 py-1 rounded-md text-secondary-light text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
