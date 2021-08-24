import { React } from 'react'

import webpage1 from "../../../../public/images/card_photos/website1.jpg"
import webpage2 from "../../../../public/images/card_photos/website2.jpg"
import webpage3 from "../../../../public/images/card_photos/website3.jpg"
import webpage4 from "../../../../public/images/card_photos/website4.jpg"
import webpage5 from "../../../../public/images/card_photos/website5.jpg"
import webpage6 from "../../../../public/images/card_photos/website6.jpg"
import webpage7 from "../../../../public/images/card_photos/website7.jpg"
import webpage8 from "../../../../public/images/card_photos/website8.jpg"
import webpage9 from "../../../../public/images/card_photos/website9.jpg"

import { Card } from "../../Card";

import "./Portfolio.css";

function Portfolio() {
    return (
        <section id="portfolio">
            <div className="portfolioContainer glow mainContainer">
                <div className="portfolioHeaderTextContainer headerTextContainer">
                    <span data-aos="fade-right" data-aos-duration="500" data-aos-mirror="true" data-aos-anchor=".portfolioHeaderTextContainer h1" className="beforeHeaderText portfolio">This is my</span>
                    <div className="headerText">
                        <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-mirror="true">Portfolio</h1>
                    </div>
                </div>
                <div className="worksContainer">
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-mirror="true" data-aos-anchor=".cardsContainer" className="honest">So, like mentioned in <span className="textBold">About me</span>, I'm a newcomer in the web development world, and this website is my first work. But I'm still gonna showcase some dummy cards and how I would present
                        my work.</p>
                    <div className="cardsContainer">
                        <div data-aos="fade-up" data-aos-duration="900" data-aos-mirror="true" className="card webpage1">
                            <Card image={webpage1} hoverHeading="Card 1" hoverText="Card Text" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="900" data-aos-mirror="true" className="card webpage2">
                            <Card image={webpage2} hoverHeading="Card 2" hoverText="Card Text" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="900" data-aos-mirror="true" className="card webpage3">
                            <Card image={webpage3} hoverHeading="Card 3" hoverText="Card Text" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="900" data-aos-mirror="true" className="card webpage4">
                            <Card image={webpage4} hoverHeading="Card 4" hoverText="Card Text" />
                        </div>
                        <div data-aos="fade-down" data-aos-duration="900" data-aos-mirror="true" className="card webpage5">
                            <Card image={webpage5} hoverHeading="Card 5" hoverText="Card Text" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="900" data-aos-mirror="true" className="card webpage6">
                            <Card image={webpage6} hoverHeading="Card 6" hoverText="Card Text" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="900" data-aos-mirror="true" className="card webpage7">
                            <Card image={webpage7} hoverHeading="Card 7" hoverText="Card Text" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="900" data-aos-mirror="true" className="card webpage8">
                            <Card image={webpage8} hoverHeading="Card 8" hoverText="Card Text" />
                        </div>
                        <div data-aos="fade-down" data-aos-duration="900" data-aos-mirror="true" className="card webpage9">
                            <Card image={webpage9} hoverHeading="Card 9" hoverText="Card Text" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Portfolio
