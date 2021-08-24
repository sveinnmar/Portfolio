import { useState, React } from 'react'
import { Button } from "./Btn";

import { Animated } from "react-animated-css";

import "./Card.css";

export const Card = ({image, hoverHeading, hoverText}) => {
    const [hover, setHover] = useState(false);

    let buttonStyles = {
        backgroundColor: `#A14D64`,
        opacity: `1`,
        borderRadius: `15px`,
        border: `none`,
        boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
      };

    const hoverHandler = (state) => {
        setHover(state);
    }

    return (
        <div className="cardContainer" style={{backgroundImage: "url(" + image + ")"}} onMouseEnter={() => {hoverHandler(true)}} onMouseLeave={() => {hoverHandler(false)}}>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={hover ? true : false}>
                <div className="hover"></div>
                <div className="hoverCard">
                    <h1>{hoverHeading}</h1>
                    <p>{hoverText}</p>
                    <div className="button">
                        {<Button classes="cardsButton" styles={buttonStyles}>Visit page</Button>}
                    </div>
                </div>
            </Animated>
        </div>
    )
}

export default Card
