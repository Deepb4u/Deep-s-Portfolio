import React, { useState } from 'react';
import './App.css';
import FrontPage from './components/FrontPage';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Connect from './components/Connect';
import Certificate from './components/Certification';
import Project from './components/Projects';
import CopyRight from './components/CopuRight';
import Chatbot from './components/Chat';

export default function App (){

const [Click, setClick] = useState(1);



const scrollToCenter = () => {
  window.scrollTo({
    top:700, 
    behavior: 'smooth',
  });
};

const handleClick = (e) =>{
  if(e.target.id === "about"){
    setClick(1)
    // scrollToCenter();
    console.log(e.target.id)
  }else if(e.target.id === "Education"){
    setClick(2)
    // scrollToCenter();
    console.log(e.target.id)
  }else if(e.target.id === "certificate"){
    setClick(3)
    // scrollToCenter();
    console.log(e.target.id)
  }else if(e.target.id === "Project"){
    setClick(4)
    console.log(e.target)
  }
  scrollToCenter();
}

  return(
    <div>
      <Navbar mode={handleClick} border={Click}/>
      <FrontPage/>
      {Click===1 ? <About/>:(Click===2 ? <Education/>:(Click===3 ? <Certificate/>:<Project/>))}
      <Connect/>
      <Chatbot/>
      <CopyRight/>
    </div>
  )
}