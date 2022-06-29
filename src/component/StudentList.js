import React from "react";
import { cardInfo } from "./CardInfo"
import { Card, Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Students = () => {
    return (
        <div>
            <p style={{ textAlign: "center", fontSize: "50px", fontFamily: "Arial", color:"brown", fontWeight: "bold" }}>Student Lists</p>
            <Row xs={1} md={2} className="g-1" >
                {cardInfo.map((info) => { 
                    return (
                        <Col>
                        <Card  key={info.name} className="box" style={{ width: "25rem", margin: "auto"}}>
                            <Card.Img variant='top' src={info.image} alt="Card Image" style={{ width: "10rem", height: "10rem", margin: "0 auto" ,marginTop: "20px" }}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center", fontFamily: "Arial", color: "Green", fontWeight: "bold" }}>{info.name}</Card.Title>
                                    <Card.Text style={{ textAlign: "center",fontFamily: "Arial", color: "Blue", fontWeight: "bold" }}>{info.gpa}</Card.Text>
                                    <Button style={{marginLeft: "150px",textAlign: "center", fontFamily: "Arial", color: "Red", fontWeight: "bold", marginBottom: "20px" }} variant='primary'>Grade</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                )
                })}
         </Row>
        </div>
    )
}

export default Students;