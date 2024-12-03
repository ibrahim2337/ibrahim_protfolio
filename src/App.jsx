import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <ContactSection />
    </>
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
