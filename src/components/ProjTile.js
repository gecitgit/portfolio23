import React from "react";

function ProjTile({proj}) {
    return (
        <div className="proj-card">
            <div className="proj-card-title">
                <h2>Project: {proj.title}</h2>
                <p>{proj.subtitle}</p>
            </div>
            <div className="proj-card-picbox">
                <img src={proj.pic} alt={proj.alttext} className="proj-pic"/>
                <p><em>{proj.alttext}</em></p>
            </div>
            <div className="proj-card-info">
                <p><strong>Summary: </strong> {proj.summary}</p>
            </div>
            <div className="proj-card-btns-cont">
                <a href={proj.livelink} target="_blank" rel="noopener noreferrer" className="proj-btns" name="hosted">Live Link</a>
                <a href={proj.gitlink} target="_blank" rel="noopener noreferrer" className="proj-btns" name="github">View Repo</a>
                {/* <a href={proj.demovid} target="_blank" rel="noopener noreferrer" className="proj-btns" name="youtube">Demo Video</a> */}
            </div>

        </div>
    )
}

export default ProjTile;