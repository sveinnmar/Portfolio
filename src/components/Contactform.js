import React from "react";
import "./Contactform.css";

export const Contactform = ({yo}) => {
    let bro = yo;

    return (
        <div class="container">
            <div class="inputContainer">
                    <div>
                        <div className="styledInput wide name">
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div className="twoInRow">
                        <div>
                            <div className="styledInput email">
                                <input type="text" required />
                                <label>Email</label> 
                            </div>
                        </div>
                        <div>
                            <div className="styledInput floating phoneNumber">
                                <input type="text" required />
                                <label>Phone Number</label> 
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="styledInput wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <div className="sendButton">Send Message</div>
                    </div>
            </div>
        </div>
    )
}