import { useState, React } from 'react'
import AOS from 'aos';
import { Animated } from "react-animated-css";
import './About.css';
import "../../../RevealingText.css";
import imageOfMe from "../../../../public/images/me.png"
import SkillChart from "../../SkillChart";

function About() {
    const [textVersion, setVersion] = useState("Longer version");
    const [isLongerText, setLonger] = useState(false);
    const [currentContent, setCurrentContent] = useState(0)

    const contentAvailable = ["About", "Education & work", "Skills"]

    function swipe(direction) {
        let contentNow = currentContent;
        let contentNext;

        if (direction === "left") {
            contentNext = contentNow-1 < 0 ? 2 : contentNow-1;
        } else {
            contentNext = contentNow+1 > 2 ? 0 : contentNow+1;
        }

        setCurrentContent(contentNext);

        AOS.refresh();
    }

    const triggerLongerAboutText = () => {
        setLonger(!isLongerText)

        if (isLongerText) {
            setVersion("Longer version");
        } else {
            setVersion("Shorter version");
        }
    }

    return (
        <section id="about">
            <div class="aboutTopSectionSplit">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="aboutContainer glow mainContainer">
                <div className="aboutHeaderTextContainer headerTextContainer">
                    <span data-aos="fade-right" data-aos-duration="500" data-aos-mirror="true" data-aos-anchor=".aboutHeaderTextContainer h1" className="beforeHeaderText about">Some info</span>
                    <div className="headerText">
                        <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-mirror="true">About me</h1>
                    </div>
                </div>
                <div className="imageAndSkills">
                    <div className="aboutImages" data-aos="fade-right"  data-aos-duration="500" data-aos-mirror="true">
                        <img className="imageOfMe" src={imageOfMe} />
                    </div>
                    <div class="skillChartContainer" data-aos="fade-left"  data-aos-duration="500" data-aos-mirror="true">
                        <SkillChart className="skillChart" />
                    </div>
                </div>
                <div className="aboutAndEducationMain">
                    <div className="aboutTextContainer withBorder">
                        <div data-aos="reveal-item" className="revealHolder">
                            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={isLongerText ? false : true}>
                            <div className="revealBlock right h1" data-aos="reveal-right"></div>
                                <h1 className={isLongerText ? "hide" : ""}>Who is this guy?</h1>
                                <p className={isLongerText ? "hide" : ""}>My name is Sveinn Már Ásgeirsson. I am a programmer from Reykjavik, Iceland. Programming has been my profession since 2015.
                                    I won't call myself a certified front-end developer <span className="textBold">yet</span>, but I am a newcomer in the world web development, and
                                    this portfolio website is actually my first try creation. I have a serious passion for creating simple yet beautiful websites with proper UI effects and animations.</p>
                                    <span className={isLongerText ? "hide" : "seeMoreOrLess"} onClick={triggerLongerAboutText}>{textVersion} <i className="fas fa-caret-down"/></span>
                            </Animated> 
                            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={isLongerText ? true : false}>
                                <div className="revealBlock right h1" data-aos="reveal-right"></div>
                                <h1 className={isLongerText ? "" : "hide"}>You want to get to know me better?</h1>
                                <p className={isLongerText ? "" : "hide"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. +
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> 
                                    <span className={isLongerText ? "seeMoreOrLess" : "hide"} onClick={triggerLongerAboutText}>{textVersion} <i className="fas fa-caret-up"/></span>
                            </Animated>
                        </div>
                    </div>
                    <div className="educationAndWorkContainer withBorder">
                        <div data-aos="reveal-item" className="revealHolder">
                            <div className="revealBlock right education" data-aos="reveal-right"></div>
                            <h1>Education</h1>
                            <p><span className="aboutTextBold">2013-2016:</span> Studied Software Engineering at University of Iceland</p>
                            <p><span className="aboutTextBold">2017-2019:</span> Studied Biomedical Engineering at Reykjavik University</p>
                            <div className="revealBlock right work" data-aos="reveal-right"></div>
                            <br/>
                
                            <h1>Work</h1>
                            <p><span className="aboutTextBold">2016-:</span> deCODE Genetics</p>
                            <p>Developing software in bioinformatics department e.g. for disease/symptom analysis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About