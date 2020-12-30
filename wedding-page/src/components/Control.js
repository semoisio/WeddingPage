import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import LogIn from './LogIn';
import React, { useState, useContext } from 'react';
import './Control.css';



function Control() {
    const [user, setUser] = useState(null);
    const loginDone = (loggedUser) => { setUser(loggedUser); }
    return (
        <Container className="controlPaaDiv" fluid>
           {
               user?
               <p>Tesi</p>: <LogIn onLogin={(user) => loginDone(user)}/>
           }
        </Container>
    );
}

export default Control;