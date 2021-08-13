import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import { Button } from "./Btn"

function NavBar() {
    const [hamburgerClick, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!hamburgerClick);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbarContainer">
                    <div className="menuIcon" onClick={handleClick}>
                        <i className={hamburgerClick ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
                        Sveinn <i class="fas fa-dice-d20" />
                    </Link>
                    <ul className={hamburgerClick ? "navMenu active" : "navMenu"}>
                        <li className="navItem">
                            <Link to="/about" className="navLinks about" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/portfolio" className="navLinks portfolio" onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/contact" className="navLinks contact" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">CV</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar
