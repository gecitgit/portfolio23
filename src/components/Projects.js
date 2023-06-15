import React from "react";
import ProjTile from "./ProjTile";

function Projects({ projectData }) {
    return (
        <div className="proj-container">
            <h1>project header</h1>
            <p>project body</p>
            {projectData.map((proj) => (
                <ProjTile key={proj.id} proj={proj}/>
            ))}
        </div>
    )
}

export default Projects;