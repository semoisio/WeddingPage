import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SignUp.css';
import React, { useState, useContext } from 'react';
import Formi from './Formi';

export const DataContext = React.createContext({});


function SignUp() {
    const [quests, setQuests] = useState([]);
    const [started, setStarted] = useState(false);

    return (
        <DataContext.Provider value={[quests, setQuests]}>
            <Container className="signUpPaaDiv p-3" fluid>
                <Row>
                    <Col>
                        <h6>Tähän kohti ohjeet kirjautumiseen</h6>
                    </Col>
                </Row>
                {
                    started?
                    null: <Button variant="success" onClick={() => setStarted(!started)}>Aloita ilmoittautuminen</Button>
                }
                {
                    started ?
                    <Formi/> : null
                }
            </Container>
        </DataContext.Provider>
    );
}

export default SignUp;
