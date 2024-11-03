import React from "react";

export default function Navbar (props) {


    return(
        <div className="d-flex justify-content-around Navbar" id="navbarNavAltMarkup">
            <div className={`border-${props.border===1 ? 'bottom' : 'none'} border-5 border-white p-2 NavButton`} >
                <a className="Anchor-tag" aria-current="page" href="#" id="about" onClick={props.mode} >About</a>
            </div>
            <div className={`border-${props.border===2 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                <a className="Anchor-tag" href="#" id="Education" onClick={props.mode} >Education</a>
            </div>
            <div className={`border-${props.border===3 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                <a className="Anchor-tag" id="certificate" href="#" onClick={props.mode} >Certificate</a>
            </div>
            <div className={`border-${props.border===4 ? 'bottom' : 'none'} border-white border-5 p-2 NavButton`}>
                <a  className="Anchor-tag" id="Project" href="#" onClick={props.mode} >Projects</a>
            </div>
        </div>
        )
}