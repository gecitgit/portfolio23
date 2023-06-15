import React from "react";
import { Link } from "react-scroll";

function ProjTile({proj}) {
    return (
        <div className="proj-card">
            <div className="proj-card-title">
                <h2>Project name: {proj.title}</h2>
                <p>{proj.subtitle}</p>
            </div>
            <div className="proj-card-picbox">
                <img src={proj.pic} alt={proj.alttext} className="proj-pic"/>
                <p>{proj.alttext}</p>
            </div>
            <div className="proj-card-info">
                <p>Summary: {proj.summary}</p>
                <img alt="HTML icon" src="./images/icons8-html-50.png" />
                <img alt="CSS icon" src="./images/icons8-css3-50.png" />
                <img alt="JS icon" src="./images/icons8-javascript-50.png" />
            </div>
            <div className="proj-card-btns-cont">
                <Link to={proj.livelink} target="_blank" className="proj-btns">Live Demo</Link>
                <Link to={proj.gitlink} target="_blank" className="proj-btns">View Repo</Link>
            </div>

        </div>
    )
}

export default ProjTile;