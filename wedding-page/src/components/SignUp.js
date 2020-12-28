import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './SignUp.css';
import React, { useState, useContext } from 'react';
import Formi from './Formi';

export const DataContext = React.createContext({});


function SignUp() {
    const [quests, setQuests] = useState([]);
    const [started, setStarted] = useState(true);

    return (
        <DataContext.Provider value={[quests, setQuests]}>
            <Container className="signUpPaaDiv" fluid>
                <Row>
                    <Col>
                        <h6>Tähän kohti ohjeet kirjautumiseen</h6>
                    </Col>
                </Row>
                {
                    started ?
                    <Formi/> : <p>Ei vielä aloitettu</p>
                }
            </Container>
        </DataContext.Provider>
    );
}

export default SignUp;
