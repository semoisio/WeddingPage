import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, CardGroup, Col, Row } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import Kortti from './Card';
import kuva1 from '../images/tuomiokirkko.jpg';
import kuva2 from '../images/parkki.png';
import kuva3 from '../images/kuopioklubi.jpg';
import './Info.css';


function Info() {
    return (
        <Container className="infoPaaDiv" fluid>
            <Row className="p-1">
                <Kortti otsikko="Hääpaikka" img={kuva1} selite="Tuomikirkko" teksti="Kuopion Tuomiokirkko"/>
                <Kortti otsikko="Hääpaikka" img={kuva3} selite="Kuopion Klubi" teksti="Kuopion Klubi"/>
                <Kortti otsikko="Pysäköinti" img={kuva2} selite="Toriparkki" teksti="Toriparkki"/>
            </Row>
        </Container>
    );
}

export default Info;