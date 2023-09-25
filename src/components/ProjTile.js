import React from "react";
import ASLPIC from '../pics/ASL-webp.webp'
import GBPIC from '../pics/gradebook-webp.webp'
import MLPIC from '../pics/mindlog-webp.webp'
import DemoDetails from "./DemoDetails";

const imageMap = {
    'GBPIC': GBPIC,
    'ASLPIC': ASLPIC,
    'MLPIC': MLPIC,
};

function ProjTile({proj}) {
    const imgSrc = imageMap[proj.pic];

    return (
        <div className="proj-card">
            <div className="proj-card-title">
                <h2>Project: {proj.title}</h2>
                <p>{proj.subtitle}</p>
            </div>
            <div className="proj-card-picbox">
                <img src={imgSrc} alt={proj.alttext} className="proj-pic" height="auto" width="100%"/>
                <p><em>{proj.alttext}</em></p>
            </div>
            <div className="proj-card-info">
                <p><strong>Summary: </strong> {proj.summary}</p>
                <DemoDetails user={proj.demoUser} pass={proj.demoPass} />
            </div>
            <div className="proj-card-btns-cont">
                <a href={proj.livelink} target="_blank" rel="noopener noreferrer" className="proj-btns" name="hosted" aria-label="Click to visit the hosted version of this app.">Live Link</a>
                <a href={proj.gitlink} target="_blank" rel="noopener noreferrer" className="proj-btns" name="github" aria-label="Click to visit the GitHub repo for this app.">View Repo</a>
                {/* <a href={proj.demovid} target="_blank" rel="noopener noreferrer" className="proj-btns" name="youtube" aria-label="Click to viist the Youtube page with the live demo of this app">Demo Video</a> */}
            </div>

        </div>
    )
}

export default ProjTile;