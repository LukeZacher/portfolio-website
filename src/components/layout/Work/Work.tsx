import SectionHeader from "../../shared/SectionHeader";

const Work = () => {
  return (
    <section className="bg-primary-dark py-8 sm:py-12 md:py-16" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header text */}
        <SectionHeader
          title="Work"
          description="Projects I have created for work, for class, or for fun."
        />
        <div></div>
      </div>
    </section>
  );
};

export default Work;
