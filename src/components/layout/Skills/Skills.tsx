import SectionHeader from "../../shared/SectionHeader";
import SkillCard from "./SkillCard";
import angularIcon from "/src/assets/icons/angular.svg";
import amazonwebservicesIcon from "/src/assets/icons/amazonwebservices.svg";
import bootstrapIcon from "/src/assets/icons/bootstrap.svg";
import cssIcon from "/src/assets/icons/css.svg";
import dockerIcon from "/src/assets/icons/docker.svg";
import expressIcon from "/src/assets/icons/express.svg";
import flaskIcon from "/src/assets/icons/flask.svg";
import gitIcon from "/src/assets/icons/git.svg";
import githubIcon from "/src/assets/icons/github.svg";
import html5Icon from "/src/assets/icons/html5.svg";
import javaIcon from "/src/assets/icons/java.svg";
import javascriptIcon from "/src/assets/icons/javascript.svg";
import jinjaIcon from "/src/assets/icons/jinja.svg";
import macosIcon from "/src/assets/icons/macos.svg";
import mongodbIcon from "/src/assets/icons/mongodb.svg";
import mysqlIcon from "/src/assets/icons/mysql.svg";
import nodedotjsIcon from "/src/assets/icons/nodedotjs.svg";
import postgresqlIcon from "/src/assets/icons/postgresql.svg";
import pythonIcon from "/src/assets/icons/python.svg";
import reactIcon from "/src/assets/icons/react.svg";
import reactnativeIcon from "/src/assets/icons/reactnative.svg";
import springIcon from "/src/assets/icons/spring.svg";
import tailwindcssIcon from "/src/assets/icons/tailwindcss.svg";
import typescriptIcon from "/src/assets/icons/typescript.svg";
import vscodeIcon from "/src/assets/icons/vscode.svg";
import windowsIcon from "/src/assets/icons/windows.svg";
import illustratorIcon from "/src/assets/icons/illustrator.svg";
import photoshopIcon from "/src/assets/icons/photoshop.svg";
import figmaIcon from "/src/assets/icons/figma.svg";
import finalcutproIcon from "/src/assets/icons/finalcutpro.svg";
import logicproIcon from "/src/assets/icons/logicpro.svg";
import canvaIcon from "/src/assets/icons/canva.svg";
import aftereffectsIcon from "/src/assets/icons/aftereffects.svg";
import blenderIcon from "/src/assets/icons/blender.svg";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Python", icon: pythonIcon },
      { name: "Java", icon: javaIcon },
      { name: "HTML", icon: html5Icon },
      { name: "CSS", icon: cssIcon },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "Angular", icon: angularIcon },
      { name: "TailwindCSS", icon: tailwindcssIcon },
      { name: "React Native", icon: reactnativeIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: nodedotjsIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "Spring Boot", icon: springIcon },
      { name: "Jinja", icon: jinjaIcon },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: mongodbIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: amazonwebservicesIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "VS Code", icon: vscodeIcon },
      { name: "Windows", icon: windowsIcon },
      { name: "macOS", icon: macosIcon },
    ],
  },
  {
    title: "Creative Programs",
    skills: [
      { name: "Illustrator", icon: illustratorIcon },
      { name: "Photoshop", icon: photoshopIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Final Cut Pro", icon: finalcutproIcon },
      { name: "Logic Pro", icon: logicproIcon },
      { name: "Canva", icon: canvaIcon },
      { name: "After Effects", icon: aftereffectsIcon },
      { name: "Blender", icon: blenderIcon },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-primary-light section-container" id="skills">
      <div className="content-container">
        {/* Header text */}
        <SectionHeader
          title="Skills"
          description="Here are some technologies I have learned and used through a
            combination of classes, work, and projects."
        />
        <div className="mb-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="mb-8">
              <h3 className="text-secondary text-xl font-bold mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
