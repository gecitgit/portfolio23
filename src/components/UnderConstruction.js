import React from "react";
import data from "./data.json";


function ProjectCardMini({ project }) {
    return(
        <div className="proj-card-mini-body">
            <p><strong>{project.title}</strong></p>
            <p>{project.subtitle}</p>
            <div className="proj-card-mini-btn-box">
                <button className="proj-btns" id="github-btn" onClick={handleClick}>repo link</button>
                <button className="proj-btns" id="live-btn" onClick={handleClick}>live link</button>
            </div>
        </div>
    )
}

function handleClick(){
    alert("That link is currently not working. Please check back in shortly.")
}

function UnderConstruction() {
    return (
        <div className="construction-container">
            <div className="body-div">  
                <h2>Oops! This page isn't ready yet!</h2>
                <span>The website is undergoing a makeover and should be back in a few days!</span>
            </div>

            <div className="body-div">
                <span>You can still find me here: </span>
                <div className="contact-btn-box">
                    <a className="social-btns" href="https://www.linkedin.com/in/taulantismailgeci/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
                    <a className="social-btns" href="https://github.com/gecitgit" target="_blank" rel="noopener noreferrer" >GitHub</a>
                </div>

            </div>

            <div className="body-div">
                <span>Check out some of my projects while you're here.</span>
                <span className="warning-msg">
                    LINKS ARE CURRENTLY DISABLED WHILE HOSTING PROBLEMS ARE RESOLVED
                </span>
                {data.projects.map((project) => (
                    <ProjectCardMini key={project.id} project={project} />
                ))}
            </div>
            
        </div>
    )
}

export default UnderConstruction;