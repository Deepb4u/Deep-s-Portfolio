import React from "react";

export default function About () {
    return(
            <section className="container about my-5">
            <div className="container text-center text-lg-start">
                <h3 className="about-h text-center mb-4">About Me</h3>
                <p className="about-p text-center">I recently graduated with a B.E. in Electronics and Telecommunication Engineering from Ajeenkya D Y Patil School of Engineering. In addition to my coursework, I possess a strong foundation in HTML and CSS, which I have honed through various projects. My passion for web development drives me to continuously improve my skills and stay updated with the latest industry trends. My projects showcase my ability to create visually appealing, user-friendly interfaces and ensure compatibility across different devices through responsive design.</p>
                <div className="row mt-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="about-inf">
                            <h4 className="inf-title">Name:</h4>
                            <p className="description">Deep Bansode</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="about-inf">
                            <h4 className="inf-title">Email:</h4>
                            <p className="description">deepbansode1@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="about-inf">
                            <h4 className="inf-title">Date of Birth:</h4>
                            <p className="description">01 July 2002</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="about-inf">
                            <h4 className="inf-title">From:</h4>
                            <p className="description">Pune, Maharashtra</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}