import React from "react";
const USK_Infotech = require("../assets/USK-infotech.png")
const Computer_science = require("../assets/Computer Science MeteBootcamp(Certificate).jpg")
const C_Cpp_Certificate = require("../assets/Mastering C & C++ programing.jpg")
const JavaScript_Certi = require("../assets/javaScript certificate.jpg")
const Course_completion = require("../assets/Course Completion Certificate - Deep bansode.png")

export default function Certificate (){
    return(
       <>
        <section className="py-5">
            <div className="container">
                <h3 className="about-h text-center mb-4">Certifications</h3>
                <p id="certifications" className="section-para text-center">
                    I have successfully completed several advanced courses that strengthen my expertise in computer science and programming. These certifications highlight my commitment to continuous learning and my proficiency in key areas of the field.
                </p>
                <div className="row mt-4 ">
                    <div className="col-md-6 col-lg-5 text-center py-3">
                        <div className="skill">
                            <img src={USK_Infotech} className="img-fluid img1" alt="Internship Certificate"/>
                            <h5 className="cert-title mt-3">Internship Certificate</h5>
                            <p className="skill-description">Successfully completed a comprehensive Software Development Internship Program </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 text-center py-3">
                        <div className="skill">
                            <img src={Course_completion} className="img-fluid" alt="JavaScript Certification"/>
                            <h5 className="cert-title mt-3">Course completion Certificate</h5>
                            <p className="skill-description">Successfully completed Accelerated MERN Stack Development Program </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 text-center py-3">
                        <div className="skill">
                            <img src={Computer_science} className="img-fluid" alt="Computer Science MetaBootcamp"/>
                            <h5 className="cert-title mt-3">Computer Science MetaBootcamp: Beginner to Intermediate 2024</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 text-center py-3">
                        <div className="skill">
                            <img src={C_Cpp_Certificate} className="img-fluid" alt="Mastering C & C++ Programming"/>
                            <h5 className="cert-title mt-3">Mastering C & C++ Programming: From Fundamentals to Advanced</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 text-center py-3">
                        <div className="skill">
                            <img src={JavaScript_Certi} className="img-fluid" alt="JavaScript Certification"/>
                            <h5 className="cert-title mt-3">JavaScript course certification </h5>
                            <p className="skill-description">Successfully completed javaScript crash course Program </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}