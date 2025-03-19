import { GithubIcon, LinkedinIcon, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] bg-primary pb-8 sm:pb-0">
      <div className="content-container py-4 lg:py-12 xl:py-6 2xl:py-40 h-full">
        {/* Container for left text and right image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4 xl:gap-12 mb-8 md:mb-12">
          {/* Left side text and social media icons */}
          <div className="col-span-1  xl:col-span-3 flex flex-col justify-center">
            <h4 className="text-secondary text-base sm:text-lg font-medium mb-2">
              Hi, My Name Is
            </h4>
            <h1 className="text-neutral-50 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
              Luke Zacher
            </h1>
            {/* Hero text paragraphs */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <p className="text-neutral-200 text-base sm:text-lg">
                I'm a graduating computer science & graphic design student at
                Creighton University with years of work experience in full stack
                development and a passion for creating intuitive user
                experiences.
              </p>
              <p className="text-neutral-200 text-base sm:text-lg">
                I'm currently part of a U.S. Air Force-funded research project
                that studies and predicts the formation and behavior of mobs. I
                also manage Fidelity Financial Corporation's digital presence
                through marketing, graphic design, and website creation while
                providing comprehensive IT support.{" "}
                <a
                  href="/documents/LukeZacher-Resume-2025.pdf"
                  download
                  className="text-secondary hover:text-secondary-light transition-colors"
                >
                  Download my resume
                </a>{" "}
                or{" "}
                <a
                  href="#work"
                  className="text-secondary hover:text-secondary-light transition-colors"
                >
                  visit my work section
                </a>{" "}
                to learn more!
              </p>
              <p className="text-neutral-200 text-base sm:text-lg">
                I'm seeking software development opportunities where I can
                leverage my unique blend of technical and design skills to
                contribute to innovative projects and continue to grow as a
                developer.
              </p>
            </div>
            {/* Social icons */}
            <div className="flex gap-4 mb-8 md:mb-0">
              <a
                href="https://github.com/LukeZacher"
                target="_blank"
                className="text-neutral-200 hover:text-secondary transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/lukezacher/"
                target="_blank"
                className="text-neutral-200 hover:text-secondary transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
          {/* Right side image */}
          <div className="col-span-1  xl:col-span-2 flex items-center justify-center">
            <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full bg-neutral-800 overflow-hidden">
              {/*Replace with actual image later */}
              <img
                src="/images/Luke-Portrait.jpg"
                alt="Luke Zacher Portrait"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>
        {/* Bottom buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-[160px] mx-auto sm:max-w-none">
          <a
            href="#contact"
            className="contact-button min-w-[140px] py-3 text-center hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="/documents/LukeZacher-Resume-2025.pdf"
            download
            className="min-w-[140px] bg-secondary hover:bg-secondary-light text-neutral-50 font-medium px-6 py-3 rounded-lg transition-colors duration-300 text-center flex items-center justify-center gap-2"
          >
            Resume
            <Download size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
