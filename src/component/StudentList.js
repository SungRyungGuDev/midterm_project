import React from "react";
import { useState } from 'react';
import { cardInfo } from "./CardInfo"
import { Card, Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Students = () => {
    const [gpa, setGpa] = useState(false);
    
    return (
        <div>
            <p style={{ textAlign: "center", fontSize: "50px", fontFamily: "Arial", color:"brown", fontWeight: "bold" }}>Student Lists</p>
            <Row md={2} className="g-1" >
                {cardInfo.map((info, i) => { 
                    return (
                        <Col>
                        <Card  key={i} className="box" style={{ width: "25rem", margin: "auto"}}>
                            <Card.Img variant='top' src={info.image} alt="Card Image" style={{ width: "10rem", height: "10rem", margin: "0 auto" ,marginTop: "20px" }}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center", fontFamily: "Arial", color: "Green", fontWeight: "bold" }}>{info.name}</Card.Title>
                                    {gpa ? <Card.Text style={{ textAlign: "center",fontFamily: "Arial", color: "Blue", fontWeight: "bold" }}>{info.gpa}</Card.Text> : 
                                    <Card.Text style={{ textAlign: "center",fontFamily: "Arial", color: "Blue", fontWeight: "bold" }}></Card.Text>}
                                    <Button onClick={() => {setGpa(!gpa)}}
                                    style={{marginLeft: "150px",textAlign: "center", fontFamily: "Arial", color: "Red", fontWeight: "bold", marginBottom: "20px" }} variant='primary'>Grade</Button>
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