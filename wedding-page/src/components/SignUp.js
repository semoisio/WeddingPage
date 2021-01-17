import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SignUp.css';
import React, { useState, useContext } from 'react';
import Formi from './Formi';
import Introduction from './SingUpIntroductions';

export const DataContext = React.createContext({});


function SignUp() {
    const [quests, setQuests] = useState([]);
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);
    const [korkeusTausta, setKorkeusTausta] = useState("100vh")

    const aloitaIlmoittautuminen = () => {
        setStarted(!started);
        setKorkeusTausta("100%");
    }

    return (
        <DataContext.Provider value={[quests, setQuests]}>
            <Container className="signUpPaaDiv p-3" style={{height: korkeusTausta}} fluid>
                <Row>
                    <Col md={{ span: 12, offset: 0 }}>
                        <Introduction />
                    </Col>
                </Row>
                {
                    done ?
                    <Col md={{ span: 6, offset: 3 }}><h1 className="p-3" >Kiitos ilmoittautumisesta!</h1></Col> : null
                }
                {
                    started?
                    null: <Button variant="success" onClick={() => aloitaIlmoittautuminen()}>Aloita ilmoittautuminen</Button>
                }
                
                {
                    started ?
                    <Formi className="Formi" loppu={setStarted} kiitos={setDone}/> : null
                }
            </Container>
        </DataContext.Provider>
    );
}

export default SignUp;
