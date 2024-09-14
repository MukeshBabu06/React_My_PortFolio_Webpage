import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Contact (){

    return(
    <Container fluid  className="d-flex flex-column content m-0 p-0">
      <Row className="p-0">
        {/* <div className="Row d-flex align-items-center"> */}
        <Col lg={12} md={12} className='' >
          <h1 className="mt-3 mb-3 text-center Contacth1">Contact Me</h1>
          <section className="Contactsec">
          <div className="Contact1">
            <span><i class="bi bi-envelope"></i></span>
            <p className="pt-2">mukesh.shaankar@gmail.com</p>
          </div>
          <div className="Contact1">
            <span><i class="bi bi-telephone"></i></span>
            <p className="pt-2">+91 - 80569 16519</p>
          </div>
          <div className="Contact1">
            <span><i class="bi bi-geo-alt"></i></span>
            <p className="pt-2">Chennai, Tamilnadu, India</p>
          </div>
          </section>
          <div className="Contact2">
            <h2>Follow Me</h2>
            <div className="ContactSoc">
            <a href="https://www.linkedin.com/in/mukeshshankar06/" className="Soc_Icon"><i class="bi bi-linkedin"></i></a>
            <a href="https://github.com/MukeshBabu06" className="Soc_Icon"><i class="bi bi-github"></i></a>
            <a href="https://www.facebook.com/" className="Soc_Icon"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/" className="Soc_Icon"><i class="bi bi-instagram"></i></a>
            <a href="https://x.com/i/flow/login" className="Soc_Icon"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}                