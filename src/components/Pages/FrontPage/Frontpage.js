import React, { useState, useEffect } from 'react';
import './Frontpage.css'
import { animated } from "react-spring";
import { OpacityChange, HeightChange, ColorChange } from "../../../Springs";

function Frontpage() {
    const [y, setY] = useState(window.pageYOffset);


    const scrollHandler = () => {
        setY(window.pageYOffset);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        console.log(window.scrollY);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [y]);

    return (
        <section className="frontpage">
            <div className="frontpageContainer">
                <div style={{transform: "translateY(" + window.scrollY*0.4 + "px)"}} className="lineContainer">
                    <animated.div style={HeightChange("0rem", "40rem", 2000)} className="line" />
                    <div class="arrow bounce">
                        <i class="fa fa-arrow-down fa-2x"></i>
                    </div>
                </div>
                <animated.div style={OpacityChange(0, 1, 2000)} className="frontpageTextContainer">
                    <div style={{opacity: 1-window.scrollY/1000}}>
                        <h1>Hello, <br/> My name is <animated.span style={ColorChange("#fff", "#E35B17", 3000)}>Sveinn Már</animated.span>.</h1>
                        <p>I'm an Icelandic programmer passionate about getting into web development, specifically <animated.span style={ColorChange("#fff", "#E35B17", 3000)}>front-end development</animated.span>. 
                        On here you can get to know me a little better, what my skills are, my previous work and how to contact me if you like what you see.</p>
                        <br/>
                        <h1>Enjoy.</h1>
                    </div>
                </animated.div>
            </div>
        </section>
    )
}

export default Frontpage
