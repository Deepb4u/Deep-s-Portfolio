import React from "react";
import "../App.css";
const MyImg = require("../assets/Untitled_Design1.png");

export default function FrontPage () {

    return(
        <>
        <header >
            <div className="headers text-center text-lg-start row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h3 className="banner-1">Hi, I am</h3>
                        <h1 className="banner-2">Deep Bansode</h1>
                        <p className="banner-p">Aspiring Full-Stack Web Developer | "Frontend & UI/UX Developer | React, Angular, nodeJs & Full-Stack Projects | Robotic Intern | Passionate about Creating Innovative Web Solutions</p>
                        <button className="btn btn-primary mt-2"><i className="fa-solid fa-cloud-arrow-down"></i> <a className="download_CV Anchor-tag" href="https://drive.google.com/file/d/1EZ3yPscPDSgdP1Anp2x0IHY1oPdNs9FF/view?usp=drive_link">Download CV</a></button>
                        <button className="btn btn-primary mt-2"><i className="fa-solid fa-phone"></i> Contact</button>
                    </div>
                    <div className="img col-lg-6">
                        <img className="pic img-fluid custom-img " src={MyImg} alt="Profile_Img"/>
                    </div>
            </div>
        </header>

        </>
    )
}