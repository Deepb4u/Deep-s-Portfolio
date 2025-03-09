import React from "react";

export default function Navbar (props) {


    return(
        <>
        <div className="Navbar">
            <div className="heding">
                <h2 className="h2" >Deep's <span className="banner-p">Portfolio</span></h2>
            </div>
            <div className="Nav-tag" id="navbarNavAltMarkup">
                <div className={`border-${props.border===1 ? 'bottom' : 'none'} border-5 border-white p-2 NavButton`} >
                    <a className="Anchor-tag menutags" aria-current="page" href="#" id="about" onClick={props.mode} >About</a>
                </div>
                <div className={`border-${props.border===2 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                    <a className="Anchor-tag menutags" href="#" id="Education" onClick={props.mode} >Education</a>
                </div>
                <div className={`border-${props.border===3 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                    <a className="Anchor-tag menutags" id="certificate" href="#" onClick={props.mode} >Certificate</a>
                </div>
                <div className={`border-${props.border===4 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                    <a  className="Anchor-tag menutags" id="Project" href="#" onClick={props.mode} >Projects</a>
                </div>
            </div>

            <div className="collapse Navbar-2" id="navbarToggleExternalContent" data-bs-theme="dark">
                <div className=" bg-dark p-4 menu">
                    {/* <div className="heding">
                        <h2 className="h2" >Deep's <span className="banner-p">Portfolio</span></h2>
                    </div>*/}
                    <div className={`border-${props.border===1 ? 'bottom' : 'none'} border-5 border-white p-2 NavButton`} >
                        <a className="Anchor-tag menutags" aria-current="page" href="#" id="about" onClick={props.mode} >About</a>
                    </div>
                    <div className={`border-${props.border===2 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                        <a className="Anchor-tag menutags" href="#" id="Education" onClick={props.mode} >Education</a>
                    </div>
                    <div className={`border-${props.border===3 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                        <a className="Anchor-tag menutags" id="certificate" href="#" onClick={props.mode} >Certificate</a>
                    </div>
                    <div className={`border-${props.border===4 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                        <a  className="Anchor-tag menutags" id="Project" href="#" onClick={props.mode} >Projects</a>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-dark">
                <div>
                    <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
        </>
        )
}