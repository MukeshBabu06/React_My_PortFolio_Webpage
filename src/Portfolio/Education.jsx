import React from "react";
import Container from 'react-bootstrap/Container';

export default function Education (){

    return(
        <body className="EDU">
            <Container fluid className="d-flex flex-column justify-content-center content m-0 p-0">
                <h1 className="EDUh1">Education History</h1>
              <h4 className="EDUh4">Diploma in Electronics and Communication Engineering(ECE) (2014)</h4>
              <h6 className="EDUh6">Karnataka University, Mysore, Karnataka, India</h6>

              <h4 className="EDUh4">Industrial Training Institute- Electronic Mechanic (2008)</h4>
              <h6 className="EDUh6">Govt Industrial Training Institute, Chennai, India</h6>
            </Container>
        </body>
    )
}
