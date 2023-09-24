import React from "react";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReact, TbBrandNextjs, TbBrandGit, TbBrandGithub, TbBrandFirebase, TbBrandVercel, TbBrandNodejs, TbBrandNpm } from "react-icons/tb";

function About() {
    return (
        <div className="about-box">
            <p className="about-header">Personalized Pedagogy to Programming</p>
            <p className="about-text">My journey from being an educator to a software engineer is driven by a passion for creating tailored experiences. As a teacher and director, I championed a 1:1 education model, emphasizing individualized instruction.  The foundation has seamlessly translated into crafting digital solutions that address unique user needs.</p>
            <p className="about-header">Tools of the Trade</p>
            <p className="about-text">From lesson planning to app crafting, these are the tools I trust to bring my digital projects to life:</p>

            <div className="tech-stack">
                <div className="tech-box">
                    <TbBrandHtml5 size={50} />
                    <p>HTML</p>
                </div>
                <div className="tech-box">
                    <TbBrandCss3 size={50} />
                    <p>CSS</p>
                </div>
                <div className="tech-box">
                    <TbBrandJavascript size={50} />
                    <p>JavaScript</p>
                </div>
                <div className="tech-box">
                    <TbBrandReact size={50} />
                    <p>React</p>
                </div>
                <div className="tech-box">
                    <TbBrandNextjs size={50} />
                    <p>Next.js</p>
                </div>
                <div className="tech-box">
                    <TbBrandFirebase size={50} />
                    <p>Firebase</p>
                </div>
                <div className="tech-box">
                    <TbBrandGit size={50} />
                    <p>Git</p>
                </div>
                <div className="tech-box">
                    <TbBrandNodejs size={50} />
                    <p>Node.js</p>
                </div>
                <div className="tech-box">
                    <TbBrandNpm size={50} />
                    <p>NPM</p>
                </div>
                <div className="tech-box">
                    <TbBrandGithub size={50} />
                    <p>GitHub</p>
                </div>
                <div className="tech-box">
                    <TbBrandVercel size={50} />
                    <p>Vercel</p>
                </div>
            </div>

        </div>
    )
}

export default About;