import Code from "./Code";
import EducationCertifications from "./EducationCertifications";
import Experiences from "./Experiences";
import Home from "./Home";
import ContactMe from "./ContactMe";
import Project from "./Projects";

const Landing = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="code">
        <Code />
      </section>
      <section id="education" className="mt-20">
        <EducationCertifications />
      </section>
      <section id="work" className="mt-10">
        <Experiences />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </>
  );
};

export default Landing;
