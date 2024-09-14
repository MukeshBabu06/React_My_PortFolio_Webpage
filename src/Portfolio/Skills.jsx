import React from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import './Portfolio.css'

export default function Skills (){

    return(
        <body className="skill">
            <Container fluid className="d-flex flex-column justify-content-center align-items-center content m-0 p-0">
                <h1 className="skill1">Skills</h1>
                <h3 className="skill2">Web Developer Skills</h3>
                <div className="Skillimg">
                    <img src={require("./Assets/html.png")} alt="Html"/>
                    <img src={require("./Assets/CSS.png")} alt="CSS" />
                    <img src={require("./Assets/bootstrap.png")} alt="Bootstrap" />
                    <img src={require("./Assets/Tailwind-css.webp")} alt="Tailwind" />
                    <img src={require("./Assets/Javascript.png")} alt="Javascript" />
                    <img src={require("./Assets/React.webp")} alt="React" />
                </div>

                <h3 className="skill3">Soft Skills</h3>
                <Table striped="columns" responsive="md" hover className="text-center skill4" >
                <thead>
                    <tr>
                        <td>Harnessing</td>
                        <td>THT Components</td>
                        <td>Time Management</td>
                        <td>Network Cable</td>
                        <td>Quality inspection</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MS Office</td>
                        <td>Problem Solving</td>
                        <td>Trouble Shooting
                        </td>
                        <td>Team Work</td>
                        <td>Confidence</td>
                    </tr>
                    <tr>
                        <td>Documentation</td>
                        <td>Adaptability</td>
                        <td>Positivity
                        </td>
                        <td>Communication</td>
                        <td>Responsibilty</td>
                    </tr>
                </tbody>
                </Table>
              
    </Container>
        </body>
    )
}
