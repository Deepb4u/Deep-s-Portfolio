import React from "react";

export default function Project () {
    return(
        <>
            <div className="container">
                <h3 className="resume-coloum-title about-h text-center my-4">Projects</h3>
                <div className="resume-item my-4">
                    <h2 className="resume-item-title Project-Heading">React E-commerce Store</h2>
                    <span >Sept 2024</span>
                    <div><span>Technologies Used: React, HTML, CSS And JavaScript</span></div>
                    <p className="resume-item-des">A front-end e-commerce website built with React. Users can view products, add them to the cart, and explore product details. This project focuses on delivering a smooth UI/UX without backend integration.</p>
                    <p className="resume-item-des text-center"><a className="view_Project" href="https://deepb4u.github.io/React-E-commerce-Store/" target="_blank">View Project</a></p>
                </div>
                <div className="resume-item my-4">
                    <h2 className="resume-item-title Project-Heading">Netflix Clone</h2>
                    <span >June 2024</span>
                    <div><span>Technologies Used: HTML, CSS And JavaScript</span></div>
                    <p className="resume-item-des">Developed a fully responsive Netflix clone that replicates the user interface of Netflix. The project involved
                                creating a visually appealing homepage with a movie poster carousel, featured content section.</p>
                    <p className="resume-item-des text-center"><a className="view_Project" href="https://deepb4u.github.io/Netflix-Clone/" target="_blank">View Project</a></p>
                </div>
                <hr/>
                <div className="resume-item my-4">
                    <h2 className="resume-item-title Project-Heading">TextFlex</h2>
                    <span>Aug 2024</span>
                        <p className="resume-item-des">TextFlex is a simple yet powerful text manipulation tool built with React. It allows users to effortlessly convert text to uppercase or lowercase, remove extra spaces, and copy the text to the clipboard. To enhance the user experience, the app features both light and dark mode, TextFlex is your go-to app for clean and flexible text management.</p>
                        <p className="resume-item-des text-center"><a className="view_Project" href="https://deepb4u.github.io/TextFlex/" target="_blank">View Project</a></p>
                </div>
                <hr/>
                <div className="resume-item my-4">
                    <h2 className="resume-item-title Project-Heading">Currency Converter Application</h2>
                    <span>July 2023</span>
                    <p className="resume-item-des">Created a currency converter application that fetches real-time currency exchange rates from an API and
                            allows users to convert amounts between different currencies.</p>
                    <p className="resume-item-des text-center"><a className="view_Project" href="https://deepb4u.github.io/CurrencyConverter/" target="_blank">View Project</a></p>
                </div>
                <hr/>
                <div className="resume-item my-4">
                    <h2 className="resume-item-title Project-Heading">Rock-Paper-scissors</h2>
                    <span>Aug 2024</span>
                        <p className="resume-item-des">Developed an interactive Stone Paper Scissors game that allows users to play against the computer.</p>
                        <p className="resume-item-des text-center"><a className="view_Project" href="https://deepb4u.github.io/Rock-Paper-scissors/" target="_blank">View Project</a></p>
                </div>
                <hr/>
                <div className="resume-item my-4">
                    <h2 className="resume-item-title Project-Heading">Tic-Tac-Toe-Game</h2>
                    <span>Aug 2024</span>
                        <p className="resume-item-des">This is a simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game allows two players to take turns and compete to get three in a row (horizontally, vertically, or diagonally). The design is minimalistic, and the game logic is implemented in JavaScript, making it interactive and responsive.</p>
                        <p className="resume-item-des text-center"><a className="view_Project" href=" https://deepb4u.github.io/Tic-Tac-Toe-Game/" target="_blank">View Project</a></p>
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-primary"><i className="fa-solid fa-download"></i> <a className="download_CV Anchor-tag" href="https://drive.google.com/file/d/1BBU-aUDIR4d9_6SbSTyoVAr-4LtSQrdR/view?usp=drivesdk">Download CV</a></button>
            </div>
        </>
    )
}