import React from "react";
import ProjTile from "./ProjTile";

function Projects({ projectData }) {
    return (
        <div className="proj-container">
            <p className="proj-header">A Selection of My Works</p>
            {projectData.map((proj) => (
                <ProjTile key={proj.id} proj={proj}/>
            ))}
        </div>
    )
}

export default Projects;