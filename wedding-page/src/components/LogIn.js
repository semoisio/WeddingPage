import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Image, Container, Row } from 'react-bootstrap';
import './Home.css';
import { useHistory } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react';
import './Control.css';


function LogIn(props) {
    const [kayttaja, setKayttaja] = useState('');
    const [salasana, setSalasana] = useState('');
    let h = useHistory();
    const [virhe, setVirhe] = useState('');

    const [doCheck, setDoCheck] = useState(0);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setDoCheck(doCheck + 1);
            event.preventDefault();
        }

    };

    useEffect(() => {
        const checkLogIn = async (i) => {
            console.log("Kirjautuminen alkaa");
            const url = "http://127.0.0.1:3000/Kirjautuminen?user=" + kayttaja + "&password=" + salasana; // REst API url

            const response = await fetch(url);
            let vastaus = await response.json();
            console.log(vastaus.session);

            if (vastaus.status === "OK") {
                if (props.onLogin != null) {
                    props.onLogin(kayttaja);
                    h.push("/Control");
                }
            }
        }

        if (doCheck > 0) { // first page load we dont do post
            checkLogIn();
        }
    }, [doCheck])

    const kayttajaChanged = (event) => {
        setKayttaja(event.target.value);
    }

    const salasanaChanged = (event) => {
        setSalasana(event.target.value);
    }

    return (
        <div className=" controlPaaDiv">
            <Form onSubmit={handleSubmit} className="logIn p-4">
                <Form.Group>
                    <Form.Label>Käyttäjätunnus</Form.Label>
                    <Form.Control required type="text" placeholder="Käyttäjätunnus" value={kayttaja} onChange={(evt) => kayttajaChanged(evt)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Salasana</Form.Label>
                    <Form.Control required type="password" placeholder="Salasana" value={salasana} onChange={(evt) => salasanaChanged(evt)} />
                </Form.Group>
                <Button variant="primary" type="submit">Kirjaudu</Button>
            </Form>
        </div >
    );
}

export default LogIn;