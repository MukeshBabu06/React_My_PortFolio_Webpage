import React from "react";
import Container from 'react-bootstrap/Container';
import './Portfolio.css'

export default function About (){

    return(
        <body className="about">
            <Container className="d-flex flex-column justify-content-center content m-0 p-0">
                <h1 className="abouth1">About Me</h1>
                <div className="aboutcontent">
              <p>A passionate front-end developer with building dynamic and visually stunning web applications. My journey in tech began with a fascination for how websites are built and designed, and I’ve since honed my skills to specialize in creating intuitive user interfaces that not only look great but also function seamlessly across all devices.</p>

            <ul className="aboutul"><h5>What I Do</h5>
                <li className="aboutulli">Web Development: I specialize in HTML, CSS, and JavaScript, and I'm well-versed in modern frameworks like React.js. I love transforming complex design concepts into clean, responsive, and user-centric websites.</li>
                <li className="aboutulli">Performance Optimization: From improving load times to enhancing responsiveness, I focus on making websites faster and more efficient to provide users with the best possible experience.</li>
            </ul>

            <h5 className="abouth5">My Approach</h5>
                 <p>I’m committed to continuous learning and staying up-to-date with the latest industry trends and technologies. My approach to development is collaborative and iterative. I value clear communication and feedback, which helps me align closely with project goals and deliver high-quality results.</p>

            <h5 className="abouth5">Why I Love What I Do</h5>
                  <p>What excites me most about front-end development is the opportunity to solve problems and bring ideas to life. I’m driven by the challenge of creating solutions that are both functional and visually appealing, and I take pride in crafting experiences that delight users and meet business objectives.</p>
            </div>
            </Container>
            
        </body>
    )
}
