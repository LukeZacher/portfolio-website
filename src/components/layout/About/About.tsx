import SectionHeader from "../../shared/SectionHeader";
import EducationCard from "./EducationCard";
import WorkExperienceCard from "./WorkExperienceCard";
import creightonLogo from "../../../assets/creighton-logo.png";
import fidelityFinancialCorporationLogo from "../../../assets/fidelity-financial-corporation-logo.jpg";

const researchResponsibilites = [
  "Lead front-end development for a U.S. Air Force-funded research project studying mob behavior and simulation, creating both an information website and interactive simulation platform",
  "Developed a responsive informational website using HTML, CSS, and JavaScript to showcase project objectives and findings",
  "Collaborated in a cross-functional team to build a full-stack mob simulation web application using Flask and Python, implementing user authentication, database integration, and simulation result visualization",
  "Designed and implemented the user interface for both the informational website and the simulation tool, ensuring consistent, user-friendly styling across multiple platforms and device types",
  "Created project branding including logo design and established UI design guidelines, combining technical development with graphic design skills",
  "Utilized GitHub for version control, managing code through forks and pull requests to collaborate with other developers",
  "Integrated front-end components with Python-based simulation models and SQL database, ensuring seamless data flow between the user interface and backend systems",
  "Participated in weekly development meetings to show progress, plan future features, and address any bugs or issues",
];

const fidelityFinancialResponsibilites = [
  "Led digital transformation for new nonprofit branch, Fidelity Financial Education First (FFEF), managing migration from Microsoft Office to Google Workspace including email systems, user accounts, and data transfer",
  "Developed and maintain company website using React and TailwindCSS, including domain procurement and hosting configuration",
  "Created comprehensive brand identity for FFEF including logo design, color scheme, and style guide implementation across all marketing materials",
  "Produce and edit promotional and educational video content using Final Cut Pro, managing entire production process from filming to post-production",
  "Design and implement digital marketing materials including social media content, business cards, and modernized informational documents",
  "Provide comprehensive IT support, managing both Microsoft Office and Google Workspace environments while troubleshooting hardware and software issues",
  "Streamline and simplify workflow for employees",
  "Photograph  and edit photos for marketing materials",
];

const researchSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Flask",
  "SQL",
  "Git",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
];

const fidelityFinancialSkills = [
  "React",
  "TailwindCSS",
  "Affinity Designer",
  "Affinity Photo",
  "Final Cut Pro",
  "Microsoft Office",
  "Google Workspace",
  "Video Production",
  "Photography",
  "Brand Design",
];

const About = () => {
  return (
    <section
      className="bg-primary-light min-h-screen py-8 sm:py-12 md:py-16"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header text */}
        <SectionHeader
          title="About Me"
          description="Find out more about my work experience, skills, and education."
        />
        <div>
          <h3 className="about-subheading">Work Experience</h3>
          <div className="mb-8 lg:mb-0">
            <WorkExperienceCard
              jobTitle="Front-End Developer & UI Designer - Research Project"
              company="Creighton University Department of Journalism"
              location="Omaha, NE"
              jobType="Part-time • Remote"
              startDate="Aug 2023"
              endDate="Present"
              responsibilities={researchResponsibilites}
              skillsUsed={researchSkills}
              companyLogo={creightonLogo}
            />
            <WorkExperienceCard
              jobTitle="Digital Marketing & IT Specialist"
              company="Fidelity Financial Corporation"
              location="Omaha, NE"
              jobType="Internship • Hybrid"
              startDate="Aug 2024"
              endDate="Present"
              responsibilities={fidelityFinancialResponsibilites}
              skillsUsed={fidelityFinancialSkills}
              companyLogo={fidelityFinancialCorporationLogo}
            />
          </div>
        </div>
        {/* Education section */}
        <div>
          <h3 className="about-subheading">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EducationCard
              degree="Computer Science"
              degreeType="B.S."
              years="2021-2025"
              university="Creighton University (Omaha, NE)"
              catalogUrl="https://catalog.creighton.edu/undergraduate/arts-sciences/csdj/computer-science/computer-science-bs/index.html"
            />
            <EducationCard
              degree="Graphic Design"
              degreeType="B.A."
              years="2021-2025"
              university="Creighton University (Omaha, NE)"
              catalogUrl="https://catalog.creighton.edu/undergraduate/arts-sciences/csdj/graphic-design/graphic-design-major/index.html"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
