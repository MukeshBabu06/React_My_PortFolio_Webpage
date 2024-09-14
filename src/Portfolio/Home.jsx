import React from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import MukeshResume from './Assets/Mukesh Front End Dev.pdf'

export default function Home() {
  return (
    <div className="Home">
      {/* <Navbar expand="lg" className="bg-body-tertiary Topmenu">
       <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-white">
            <Nav.Link href="/" className="ms-4 me-4 fw-bolder text-white">Home</Nav.Link>
            <Nav.Link href="/About" className="ms-4 me-4 fw-bolder text-white">About</Nav.Link>
            <Nav.Link href="/Portfolio" className="ms-4 me-4 fw-bolder text-white">Portfolio</Nav.Link>
            <Nav.Link href="/Experience" className="ms-4 me-4 fw-bolder text-white">Experience</Nav.Link>
            <Nav.Link href="/Education" className="ms-4 me-4 fw-bolder text-white">Education</Nav.Link>
            <Nav.Link href="/Contact" className="ms-4 me-4 fw-bolder text-white">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar> */}
      <Container
        fluid
        className=" p-5 d-flex flex-column justify-content-center align-items-center content "
      >
        <section className="Homesec animate">
          <h5 className="Homeh5">Welcome to My World</h5>
          <h1 className="Homeh1">Hi, I'm Mukesh Babu</h1>
          <h3 className="Homeh3">Front end Web Developer</h3>
          <p className="Homep">
            In order to create engaging and responsive websites and web
            applications, a front-end web developer must be creative and
            meticulous. competent with JavaScript, HTML, CSS, and contemporary
            frameworks like React.js. demonstrated aptitude for working together
            with design and development teams to produce excellent, user-focused
            solutions. In the process of supporting innovation and improving
            user experience, I hope to apply my knowledge and passion as a
            Front-End Web Developer.
          </p>
          </section>
          <div className="d-flex">
          <Button className="btn btn-warning HomeButon">
            <Link className="HBtnLink" to={"/Portfolio"}>
              Projects
            </Link>
          </Button>
          <Button className="btn btn-warning HomeButon">
            <a href={MukeshResume} download>Download CV <span><i class="bi bi-download"></i></span></a>
          </Button>
          </div>
        
        <div className="HomeSocial">
          <div className="HomeSocial_icon">
            <a
              href="https://www.linkedin.com/in/mukeshshankar06/"
              className="HSoc_Icon"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/MukeshBabu06" className="HSoc_Icon">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://www.facebook.com/" className="HSoc_Icon">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" className="HSoc_Icon">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://x.com/i/flow/login" className="HSoc_Icon">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
        </div>
        {/* <p>Creative and detail-oriented Front-End Web Developer in building responsive and engaging websites and web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks such as React js. Proven ability to collaborate with design and development teams to deliver high-quality, user-focused solutions. Seeking to contribute my expertise and enthusiasm to as a Front-End Web Developer, driving innovation and enhancing the user experience.</p> */}
      </Container>
    </div>
  );
}
