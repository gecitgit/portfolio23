import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import headshot from '../pics/VECTOR OUTLINE WEBP.webp'
import bgLarge from '../pics/bg-gif-large.gif'
import bgwebm from '../pics/bg-vid-webm.webm'

function Hero(){
    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["TAO-lahnt", "/'tAu,lA ŋt/"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        };

        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="hero-body" id="hero">
            <img src={bgLarge} alt="gif for background page of random coding" className="backgroundGIF" />
            <div className="hero-text">
                <h1>Hi, I'm <span style={{ color: "#113969"}}>Taulant!</span></h1>
                <p>...kind of like <span style={{ color: "#113969"}} ref={el}></span></p>
                <h2>Educator turned software engineer with a knack for user-centric solutions.</h2>
            </div>
            <img 
                src={headshot} 
                alt="headshot"
                className="headshot"
                height="100%"
                width="100%"   
            />
        </div>
    )
}

export default Hero;