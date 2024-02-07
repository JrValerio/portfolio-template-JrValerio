import { Header } from "./components/Header/Header";
import { BannerSection } from "./components/BannerSection/BannerSection";
import { AboutMeSection } from "./components/AboutMeSection/AboutMeSection";
import { TechSection } from "./components/TechSection/TechSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectSection";
import { Footer } from "./components/Footer/Footer";
import { technologies } from "./data/technologies";
import { projects } from "./data/projects";
import "./styles/Index.css";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection technologies={technologies} />
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
    </>
  );
};
