import React from "react";

const reactImg = require("../assets/ReactJs.png")
const NodeJs = require("../assets/NodeJs.webp")
const MongoDB = require("../assets/MongoDB.png")

export default function Education () {
    return(
        <div>
            <section className="pt-5">
            <div className="container">
                <h3 className="about-h text-center mb-4">A Summary of My Resume</h3>
                <div className="col">
                    <div>
                        <h3 className="my-Education-h3 ">My Education</h3>
                        <div className="my-Education">
                            <div className="resume-item">
                                <h2 className="resume-item-title">B.E. - Electronics and Telecommunication</h2>
                                <h3 className="resume-item-inst">Ajeenkya D Y Patil School of Engineering -
                                    ADYPSOE</h3>
                                <p className="resume-item-des">Acquired fundamental skills and knowledge in computer engineering.</p>
                            </div>
                            <hr/>
                            <div className="resume-item">
                                <h2 className="resume-item-title">12th | Maharashtra State Board | 2018-2020</h2>
                                <h3 className="resume-item-inst">S.Sayajinath Maharaj Secondary & H.Sec. School.</h3>
                                <p className="resume-item-des">Completed a comprehensive curriculum in computer engineering.</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            </section>
            <section className="py-5">
            <div className="container">
                <h3 className="about-h text-center mb-4">What I Do</h3>
                <p id="what-i-do" className="section-para text-center"> I specialize in creating dynamic, responsive, and user-friendly web applications. My technical skills include HTML, CSS, JavaScript, Node.js, and Python.I am also proficient in data structures and algorithms, which enables me to write efficient and optimized code.If you are looking for a dedicated software developer who is eager to contribute and grow within your team, feel free to connect with me.</p>
                <div className="row mt-4 align-items-center">
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="skill">
                            <img src={reactImg} className="img-fluid" alt=""/>
                            <h3 className="skill-title">React</h3>
                            <p className="skill-description">Experienced in building scalable and maintainable web applications using React.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="skill">
                            <img src={NodeJs} className="img-fluid" alt=""/>
                            <h3 className="skill-title">Node.js</h3>
                            <p className="skill-description">Skilled in server-side development with Node.js, facilitating efficient backend solutions.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="skill">
                            <img src={MongoDB} className="img-fluid" alt=""/>
                            <h3 className="skill-title">MongoDB</h3>
                            <p className="skill-description">Expertise in using MongoDB for building and managing large-scale databases.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}