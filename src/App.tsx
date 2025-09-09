import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Work from "./components/layout/Work";
import Skills from "./components/layout/Skills";
// import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
