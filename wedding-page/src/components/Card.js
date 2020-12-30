import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Card } from 'react-bootstrap';
import React, { useState, useContext } from 'react';


function Kortti(props) {
    const kuvakoko ={
        width: '20rem',
        height: '15rem'
    }
    return (
        <Card bg="info" className="col-md-3 m-1">
            <Card.Body>
                <Card.Title>{props.otsikko}</Card.Title>
                <Card.Img style={kuvakoko} src={props.img} alt={props.selite} />
                <Card.Title>{props.teksti}</Card.Title>
            </Card.Body>
            <Button className="col-md-3">Lisää</Button>
        </Card>
    );
}

export default Kortti;