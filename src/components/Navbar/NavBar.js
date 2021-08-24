import { NavHashLink as Link } from 'react-router-hash-link';

import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import { Button } from "../Btn";
import { ColorChange, OpacityChange } from "../../Springs";
import { animated } from "react-spring";

function NavBar() {
    const [hamburgerClick, setHamburgerClick] = useState(false);
    const [button, setButton] = useState(true);
    const [y, setY] = useState(window.pageYOffset);
    const [x, setInnerWidth] = useState(window.innerWidth);
    const [previousDirection, setCurScroll] = useState(0);

    const handleHamburgerClick = () => {
        setHamburgerClick(!hamburgerClick);

        if (!hamburgerClick) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }

    const closeMobileMenu = () => setHamburgerClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const scrollHandler = () => {
        let currentY = window.pageYOffset;
        let currentDirection;

        if (y < currentY) {
            currentDirection = 2;
        } else if (y > currentY) {
            currentDirection = 1;
        }

        setCurScroll(currentDirection);
        setY(window.pageYOffset);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [y]);

    useEffect(() => {
        function updateInnerWidth() {
            setInnerWidth(window.innerWidth);

            if (window.innerWidth > 960) {
                document.body.style.overflow = 'unset';
            } else if (window.innerWidth < 960 && hamburgerClick) {
                document.body.style.overflow = 'hidden';
            }
        }
        
        window.addEventListener("resize", updateInnerWidth);
        updateInnerWidth();
        return () => { window.removeEventListener("resize", updateInnerWidth); }
    }, []);

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <section className={(previousDirection === 0 || previousDirection === 1) ? "navbar" : "navbar hide"}>
            <div className="navbarContainer">
                <Link to="/#" className="navbarLogoLink" onClick={closeMobileMenu}>
                    <animated.span style={ColorChange("#fff", "#E35B17", 3000)} className="navbarLogo">sveinn.már()</animated.span>
                </Link>
                <nav class="nav">
                    <div className="menuIcon" onClick={handleHamburgerClick}>
                        <i className={hamburgerClick ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={hamburgerClick ? "navMenu active" : "navMenu"}>
                        <div className="navLinksContainer">
                            <animated.li style={OpacityChange(0, 1, 1000)} className="navItem">
                                    <Link to="/#about" className="navLinks about" onClick={closeMobileMenu}>
                                        About
                                    </Link>
                            </animated.li>
                            <animated.li style={OpacityChange(0, 1, 2000)} className="navItem">
                                    <Link to="/#portfolio" className="navLinks portfolio" onClick={closeMobileMenu}>
                                        Portfolio
                                    </Link>
                            </animated.li>
                            <animated.li style={OpacityChange(0, 1, 3000)} className="navItem">
                                    <Link to="/#contact" className="navLinks contact" onClick={closeMobileMenu}>
                                        Contact
                                    </Link>
                            </animated.li>
                            <animated.li style={OpacityChange(0, 1, 1000)} className="navItem cvButton">
                                {<Button buttonStyle="btn--outline">CV</Button>}
                            </animated.li>
                        </div>
                    </ul>
                </nav>
            </div>
        </section>
        
    )
}

export default NavBar
