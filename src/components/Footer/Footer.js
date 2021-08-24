import { useState, React } from 'react'

import "./Footer.css"

function Footer() {
    const [hoverInstagram, setHoverInstagram] = useState(false);
    const [hoverFacebook, setHoverFacebook] = useState(false);
    const [hoverLinkedin, setHoverLinkedin] = useState(false);
    const [hoverGithub, setHoverGithub] = useState(false);

    const hoverHandler = (state, icon) => {
        // setHover(state);

        if (icon === "instagram") {
            setHoverInstagram(state);
        } else if (icon === "facebook") {
            setHoverFacebook(state);
        } else if (icon === "linkedin") {
            setHoverLinkedin(state);
        } else {
            setHoverGithub(state);
        }
    }

    return (
        <section className="footer">
            <div className="footerContainer">
                <div className="footerContent">
                    <div className="mediaContainer">
                        <div className="socialMedia">
                            <a href="https://www.facebook.com/sveinnM"><i class={hoverFacebook ? "fab fa-facebook-square active" : "fab fa-facebook-square"} onMouseEnter={() => {hoverHandler(true, "facebook")}} onMouseLeave={() => {hoverHandler(false, "facebook")}}></i></a>
                            <a href="https://www.instagram.com/sveinnmar"><i class={hoverInstagram ? "fab fa-instagram-square active" : "fab fa-instagram-square"} onMouseEnter={() => {hoverHandler(true, "instagram")}} onMouseLeave={() => {hoverHandler(false, "instagram")}}></i></a>
                            <a href="https://www.linkedin.com/in/sveinn-m%C3%A1r-%C3%A1sgeirsson-393358126/"><i class={hoverLinkedin ? "fab fa-linkedin active" : "fab fa-linkedin"} onMouseEnter={() => {hoverHandler(true, "linkedin")}} onMouseLeave={() => {hoverHandler(false, "linkedin")}}></i></a>
                            <a href="https://www.github.com/sveinnmar"><i class={hoverGithub ? "fab fa-github-square active" : "fab fa-github-square"} onMouseEnter={() => {hoverHandler(true, "github")}} onMouseLeave={() => {hoverHandler(false, "github")}}></i></a>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Sveinn Már Ásgeirsson<br/><i class="far fa-copyright"></i> 2021</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
