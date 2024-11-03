import React from "react";

export default function Connect () {
    return(
        <>
        <footer className="py-4 footer1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="about-h">Let's Connect</h3>
                        <p className="about-p">Please fill out the form in this section to contact me.</p>
                    </div>
                    <div className="col-md-6">
                        <h3 className="about-h">Message Me</h3>
                        <form className="contact">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email"/> 
                            </div>
                            <div className="mb-3">
                                <textarea placeholder="Message" className="form-control" rows="5"></textarea>
                            </div>
                            <div className="text-center mt-4 align-items-center">
                                <button className="btn btn-primary"><i className="fa-solid fa-download"></i> Submit</button>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        <div className="social-link pt-5">
            <a className="Icons mx-4" id=".Icons1" href="https://www.instagram.com/deep_.0_7_0?igsh=aDJ1YmgyOXlnc3Zy" target="blank"><i class="fa-brands fa-instagram"></i></a>
            <a className="Icons mx-4" id=".Icons2" href="http://www.linkedin.com/in/deep-bansode-021388249" target="blank"><i class="fa-brands fa-linkedin"></i></a>
            <a className="Icons mx-4" id=".Icons3" href=" https://github.com/Deepb4u" target="blank"><i class="fa-brands fa-github"></i></a>
            <a className="Icons mx-4" id=".Icons4" href="mailto:deepbansode1@gmail.com?subject=Contact%20from%20Portfolio" target="blank"><i class="fa-regular fa-envelope"></i></a>
        </div>
        </footer>
        </>
    )
}