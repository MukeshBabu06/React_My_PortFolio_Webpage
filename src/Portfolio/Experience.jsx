import React from "react";
import Container from 'react-bootstrap/Container';
import './Portfolio.css'

export default function About (){

    return(
        <body className="Exper">
            <Container fluid className="d-flex flex-column justify-content-center content m-0 p-0">
            <h1 className="Experh1">Work Experience</h1>
            <div className="Experul">
            <ul><h5>Loud Oli Tech- Affiliate Marketer (2022-2024) </h5>
                    <li className="Experulli">Monitoring affiliate activity, analyzing performance, and identifying areas of improvement to increase revenues, Communicating and monitoring compliance or brand guidelines in affiliate.</li>
                    <li className="Experulli">Building and maintaining strong relationships with advertisers, publishers, and affiliates, and ensuring their
                    satisfaction & ongoing partnership.</li>
            </ul>
            <ul><h5>Senior Technician - Datapatterns pvt ltd, Chennai (2008 - 2022)</h5>
                    <li className="Experulli">Senior Technician with 13 years of experience in Defense & Aerospace environment.</li>
                    <li className="Experulli">Assembled wire harnesses for Aerospace projects such as Satellites, Missiles, Fire control system, Launcher,Aircrafts, Radars and Submarine projects.</li>
                    <li className="Experulli">Familiarity with Cat 5 and Cat 6 network cable or data cable (installations and terminations).</li>
                    <li className="Experulli">Knowledge on Crimping tools, Crimping Methods & Wiring Diagram preparation, MIL Standard & Aerospace connectors and cables.</li>
                    <li className="Experulli">Trouble shooting of electronic system, equipments, power tools, soldering stations etc.,</li>
                    <li className="Experulli">Inspection of defense and aerospace system wiring & PCB assembly.</li>
            </ul>
            <ul><h6>Knowledge in Standards</h6>
                    <li className="Experulli">IPC J-STD-001: Requirements for soldered electrical and electronic assemblies.</li>
                    <li className="Experulli">IPC A-610: Acceptability standards for electronic assemblies.</li>
                    <li className="Experulli">IPC A 620: Requirements and acceptance for cable and wire harness assemblies.</li>
                    <li className="Experulli">ESD: ANSI I ESD S 20.20:2007.</li>
                    <li className="Experulli">MIL-STD-810: Environmental test methods.</li>
            </ul>
            </div>
    </Container>
        </body>
    )
}
