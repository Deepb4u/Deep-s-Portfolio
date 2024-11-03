import React from "react";
import "../App.css";
const MyImg = require("../assets/Profile-pic.png");

export default function FrontPage () {

    return(
        <>
        <header className="headers">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link Anchor-tag" href="https://github.com/Deepb4u/Portfolio.git">Portfolio</a></li>
                            {/* <li className="nav-item"><a className="nav-link Anchor-tag" href="#">Blog</a></li> */}
                            <li className="nav-item"><a className="nav-link Anchor-tag" href="mailto:deepbansode1@gmail.com?subject=Contact%20from%20Portfolio">Hire me</a></li>
                            {/* <li className="nav-item"><button className="btn btn-primary">Hire Me</button></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container text-center text-lg-start">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h3 className="banner-1">Hi, I am</h3>
                        <h1 className="banner-2">Deep Bansode</h1>
                        <p className="banner-p">Aspiring Full-Stack Web Developer | HTML, CSS, JavaScript, Node.js, Python | Passionate about Creating Innovative Web Solutions</p>
                        <button className="btn btn-primary me-2"><i className="fa-solid fa-cloud-arrow-down"></i> <a className="download_CV Anchor-tag" href="https://drive.google.com/file/d/1BBU-aUDIR4d9_6SbSTyoVAr-4LtSQrdR/view?usp=drivesdk">Download CV</a></button>
                        <button className="btn btn-primary"><i className="fa-solid fa-phone"></i> Contact</button>
                    </div>
                    <div className="col-lg-6 img">
                        <img className="pic img-fluid" src={MyImg} alt="Profile_Img"/>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}