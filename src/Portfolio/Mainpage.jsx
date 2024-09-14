import React from "react";
import { Outlet, Link } from "react-router-dom";
//import './Prj.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Portfolio.css'


export default function Mainpage(){

    return(
        <div className="mainpage">
        <Navbar expand="lg" className="bg-body-tertiary Topmenu">
       <Container fluid>
        <Navbar.Brand href="/" className="ps-5 ms-3 text-white fw-bolder"><i class="bi bi-person-arms-up text-white me-1"></i>Mukesh Babu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="pe-5 me-5 text-white Navbarmenu">
            <Nav.Link href="/" className="ms-4 me-4 fw-bolder text-white Navmenu">Home</Nav.Link>
            <Nav.Link href="/About" className="ms-4 me-4 fw-bolder text-white Navmenu">About</Nav.Link>
            <Nav.Link href="/Portfolio" className="ms-4 me-4 fw-bolder text-white Navmenu">Portfolio</Nav.Link>
            <Nav.Link href="/Experience" className="ms-4 me-4 fw-bolder text-white Navmenu">Experience</Nav.Link>
            {/* <Nav.Link href="/Education" className="ms-4 me-4 fw-bolder text-white Navmenu">Education</Nav.Link> */}
            <Nav.Link href="/Skills" className="ms-4 me-4 fw-bolder text-white Navmenu">Skills</Nav.Link>
            <Nav.Link href="/Contact" className="ms-4 me-4 fw-bolder text-white Navmenu">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    {/*<Container fluid className=" mh-100 d-flex flex-column justify-content-center align-items-center content">
    <h5 className="Homeh5">Welcome to My World</h5>
    <h1 className="Homeh1">Hi, I'm Mukesh Babu</h1>
    <h3 className="Homeh3">Front end Web Developer</h3>
    <p className="Homep">In order to create engaging and responsive websites and web applications, a front-end web developer must be creative and meticulous. competent with JavaScript, HTML, CSS, and contemporary frameworks like React.js. demonstrated aptitude for working together with design and development teams to produce excellent, user-focused solutions. In the process of supporting innovation and improving user experience, I hope to apply my knowledge and passion as a Front-End Web Developer.</p>
     <p>Creative and detail-oriented Front-End Web Developer in building responsive and engaging websites and web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks such as React js. Proven ability to collaborate with design and development teams to deliver high-quality, user-focused solutions. Seeking to contribute my expertise and enthusiasm to as a Front-End Web Developer, driving innovation and enhancing the user experience.</p> 
    </Container>*/}
    <Outlet/>
    </div>
        
    )
}