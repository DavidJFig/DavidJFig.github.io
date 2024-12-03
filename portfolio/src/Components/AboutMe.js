import React from "react";
import david from "../david.jpg";
import "../CSS/AboutMe.css";

function AboutMe() {
    return (
        // div with two columns
        <div className="about-me">
            <div className="column">
                <img src={david} className="profile-picture" alt="Headshot" />
            </div>
            <div className="column">
                <h1>About Me</h1>
                <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur quis elementum nibh. Sed blandit vitae dolor a ornare. 
                Morbi placerat consectetur molestie. In a justo eget leo viverra 
                malesuada. Vivamus eget nisi at justo ultricies sagittis sed sit
                 amet ante. Vivamus et nisi in quam tempus fermentum quis non 
                 ipsum. Ut nec nulla porttitor, accumsan dolor ut, porttitor purus.
                 </p>
            </div>

        </div>
    );
}

export default AboutMe;