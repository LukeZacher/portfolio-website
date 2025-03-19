import SectionHeader from "../../shared/SectionHeader";
import ProgrammingProjectCard from "./ProgrammingProjectCard";
import DesignProjectCard from "./DesignProjectCard";

const designProjects = [
  {
    title: "Toy Package",
    description:
      "A package design for a fictional toy. The design was printed onto card stock and displayed in the graphic design department building.",
    image: "/src/assets/project-images/graphic-design/Toy-Packaging.jpg",
    tools: ["Adobe Photoshop"],
  },
  {
    title: "Logo",
    description:
      "As the head of marketing Fidelity Financial's launch of a new educational entity, Fidelity Financial Education First, I was tasked with creating a new logo. This is the gold variation.",
    image: "/src/assets/project-images/graphic-design/Financial-Logo.jpg",
    tools: ["Affinity Designer"],
  },
  {
    title: "Billboard Design",
    description:
      "Part of a brand identity project for a fictional cologne called 'Noir Rouge'.",
    image: "/src/assets/project-images/graphic-design/Billboard.png",
    tools: ["Adobe Illustrator"],
  },
  {
    title: "Marketing Infographic",
    description:
      "A clean, modern marketing infographic highlighting features and awards of Genesis' luxury SUV, the GV80.",
    image: "/src/assets/project-images/graphic-design/Car-Infographic.jpg",
    tools: ["Adobe Illustrator"],
  },
  {
    title: "Sports Collage",
    description:
      "A sports collage showcasing star Timberwolves player Anthony Edwards soaring above the Minneapolis skyline.",
    image: "/src/assets/project-images/graphic-design/Sports-Collage.jpg",
    tools: ["Adobe Photoshop"],
  },

  {
    title: "Business Card",
    description:
      "Business card design for Fidelity Financial's new educational entity, which were printed and used.",
    image: "/src/assets/project-images/graphic-design/Business-Card.png",
    tools: ["Affinity Designer"],
  },

  {
    title: "Document",
    description:
      "Marketing document providing information about company services. Presented to prospective clients during consultations/meetings.",
    image:
      "/src/assets/project-images/graphic-design/Informational-Marketing-Document.png",
    tools: ["Adobe InDesign"],
  },
  {
    title: "Financial Form",
    description:
      "Redesigned an old form/checklist document to have a modern look in line with new company branding.",
    image: "/src/assets/project-images/graphic-design/Form.png",
    tools: ["Adobe InDesign"],
  },
  {
    title: "Small Business Logos",
    description: "Logo variations for a fictional local karate dojo.",
    image: "/src/assets/project-images/graphic-design/Logo.png",
    tools: ["Adobe Illustrator"],
  },
];

const Work = () => {
  return (
    <section className="bg-primary-dark section-container" id="work">
      <div className="content-container">
        {/* Header text */}
        <SectionHeader
          title="Work"
          description="Projects I have created for work, for class, or for fun."
        />
        {/* Programming Projects */}
        <div className="mb-10">
          <div className="about-subheading mb-6 lg:mb-8">
            Programming Projects
          </div>
          <ProgrammingProjectCard
            title="Mob Simulation Web Tool"
            description="A full-stack web tool for simulating online mob behavior and outcomes. Part of a U.S. Department of Defense-funded research project, featuring students and professors from Creighton University and the University of Arkansas at Little Rock (UALR). Working under Dr. Samer Al-Khateeb, I led the frontend development and UI design while also contributing to initial backend architecture and assisted with backend integration. The tool's user-friendly interface allows users to ask questions about a hypothetical mob through a chatbot interface, input mob characteristics, select from several social science theories, and view and save simulation results. The tool was built using HTML, CSS, and JavaScript for the frontend with Flask and Django for the backend. Users can create an account, run simulations, and analyze the results through an interactive visualization or by exporting the simulation data in CSV format. Users can also view their recent questions and simulation results on their profile page."
            image="/src/assets/project-images/programming/Mob-Simulator-Homepage.png"
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "Python",
              "Flask",
              "SQL",
            ]}
          />
          <ProgrammingProjectCard
            title="Research Project Informational Website"
            description="A responsive informational website dedicated to the mob research project I am a part of. Features several sections, including an image carousel, Twitter/X widget, publications, and tools page. Built using Vite, React, TypeScript, and TailwindCSS V4."
            image="/src/assets/project-images/programming/Research-Project-Informational-Website.png"
            technologies={["React", "TypeScript", "TailwindCSS", "HTML"]}
          />
        </div>

        {/* Graphic Design Projects */}
        <div>
          <div className="about-subheading mb-8">Graphic Design Projects</div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {designProjects.map((project) => (
              <div className="break-inside-avoid">
                <DesignProjectCard key={project.title} {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
