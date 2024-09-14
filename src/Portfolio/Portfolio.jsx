import React from "react";
import {Container,Row,Card} from 'react-bootstrap';
import './Portfolio.css'

export default function Portfolio (){

    return(
        <body className="Portfol">
            <Container fluid className=" m-0 ps-3 pe-3 d-flex flex-column justify-content-center align-items-center content">
            <h1 className="Portfolh1">My Portfolio</h1>
                <Row className="d-flex justify-content-center Portfol1">
                <a href="https://github.com/MukeshBabu06/HTML_Shawarma_Webpage" className="PrjLink" ><Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Shawarma.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Food Webpage<br /><span>(HTML)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/HTML_Login_Page" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Html Login Page.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Login Page<br /><span>(HTML)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/CSS_Ecommerce_Webpage" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Online shopping.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Ecommerce Webpage<br /><span>(CSS)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/CSS_Chennai-Explore_Webpage" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Chennai.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Chennai Explore Webpage<br /><span>(CSS)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/CSS_Login_Page" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Login Css.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Login Page<br /><span>(CSS)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/Bootstrap_Deadpool-vs-Wolverine_Webpage" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Deadpool.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Movie Promotion Webpage<br /><span>(CSS)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/CSS_SuperHero-s_Merchandise" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Superhero Merchanise.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>SuperHero Merchandise Webpage<br /><span>(CSS)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/Bootstrap_Momos-Food-Order-App" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Momos.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Food Webpage<br /><span>(Bootstrap)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/Bootstrap_Netflix-Login-Page-Clone" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Netflix Login.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Netflix Login Page<br /><span>(Bootstrap)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/Bootstrap_Your-Dream-Home_Project" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Dream Home.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Property Webpage<br /><span>(Bootstrap)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/Bootstrap_Credo-Systemz_Webpage" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Credo.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Credo Official Webpage<br /><span>(Bootstrap)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/Javascript_Compound-Interest-Calculator" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Compoud Interset.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Compound Interest Calculator<br /><span>(JavaScript)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/JavaScript_PPF-Calculator" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/PPF.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>PPF Calculator<br /><span>(JavaScript)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/CSS_Login_Page" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/Todlist.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>To Do List App<br /><span>(React Js)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/React_Multiple_Calculators" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/React calcul.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Calculators Webpage<br /><span>(React Js)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/React_Food_Order_App" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/React Food App.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Food Order App<br /><span>(React Js)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/React_Ecommerce_Webpage" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/React Ecommerce Webpage.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>Ecommerce Webpage<br /><span>(React Js)</span></h3></Card.Title>
                </Card>
                </a>
                <a href="https://github.com/MukeshBabu06/React_My_PortFolio_Webpage" className="PrjLink">
                <Card className="Prjcard">
                <Card.Img variant="top" className="PrjcardImg" src={require("../Portfolio/Assets/Protfol/React PortFolio.jpg")} fluid />
                   <Card.Title className="Prjcardtitle"><h3>My Portfolio Webpage<br /><span>(React Js)</span></h3></Card.Title>
                </Card>
                </a>
                </Row>
            </Container>
        </body>
    )
}
