import React from 'react'

import { Contactform } from "../../Contactform";

import "./Contact.css"

function Contact() {
    return (
        <section className="contact">
            <div className="contactContainer mainContainer">
                <div className="contactHeaderTextContainer headerTextContainer">
                    <span data-aos="fade-right" data-aos-duration="500" data-aos-mirror="true" data-aos-anchor=".contactHeaderTextContainer h1" className="beforeHeaderText contact">Lets make</span>
                    <div className="headerText">
                        <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-mirror="true">Contact</h1>
                    </div>
                </div>
                <Contactform />
            </div>
        </section>
    )
}

export default Contact
