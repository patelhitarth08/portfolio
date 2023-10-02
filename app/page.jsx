import React from "react";
import Home from "@components/Home.jsx";
import Education from "@components/Education";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Experience from "@components/Experience";
import ExtraCurricular from "@components/ExtraCurricular";
import Achievements from "@components/Achievements";
import ContactMe from "@components/ContactMe";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
// import PaticlesBackground from "@components/PaticlesBackground";

const Page = () => {
  return (
    <div>
      {/* <PaticlesBackground></PaticlesBackground> */}

      <Nav />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <ExtraCurricular />
      <Achievements />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Page;
