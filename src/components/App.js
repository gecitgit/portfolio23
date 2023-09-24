import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Hero from "./Hero";
import data from "./data.json";
import { TbArrowBarToUp } from "react-icons/tb";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const projectData = data.projects;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 500) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Element className="bodySection" name="hero"><Hero /></Element>
      <Element className="bodySection" name="about"><About /></Element>
      <Element className="bodySection" name="projects"><Projects projectData={projectData} /></Element>
      <Element className="bodySection" name="contact"><Contact /></Element>
      <Element className="scroll-to-top-button" name="scrollToTopButton">
        {showScroll && (
          <button onClick={scrollToTop} className="scroll-to-top-button__button">
            <TbArrowBarToUp  size={30}/>
          </button>
        )}
      </Element>
    </div>
  )
}
export default App;