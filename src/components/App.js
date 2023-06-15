import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import { Element } from "react-scroll";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import Hero from "./Hero";
import data from "./data.json";

function App() {
  // const [projs, setProjs] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  const projectData = data.projects;
  console.log("project data: ", projectData)

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
      <p>there's a new king in this jungle</p>
    </div>
  )
}

export default App;

//home, about, projects, resume, 

//run the site with:
//npm start
//    runs the react app
//json-server --watch db.json --port 4000
//    starts the json server on port 4000