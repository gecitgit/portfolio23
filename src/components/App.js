import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";
import About from "./About";
import Hero from "./Hero";

function App() {
  const [projs, setProjs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((r) => r.json())
      .then((data) => setProjs(data));
  }, []);


  return(
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects projs={projs} />
      <Resume />
      {/* <Routes>
        <Route path="/projects" element={<Projects projs={projs}/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Footer />
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