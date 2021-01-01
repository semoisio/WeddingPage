import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Image, Container, Row } from 'react-bootstrap';
import './Home.css';
import { useHistory } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react';


function LogIn() {
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
            setDoCheck(doCheck+1);
            event.preventDefault();
        }

    };

    useEffect( () => {
        const lisaaAuto = async (i) => {
            console.log("lISÄYS ALKAA");
            const url = "http://127.0.0.1:3000/Vieraat"; // REst API url
    
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
    
            console.log("response:", response);
            console.log("response:", await response.json());
        }

        if ( doPost > 0 ){ // first page load we dont do post
            muunnaSyote();
            for(i = 0; i < taulu.length; i++){ // loop through all the data in array
                lisaaAuto(i)
            }
            // clear all arrays what I use 
            clearArray(taulu);
            clearArray(props.data);
            props.loppu(false);
            props.kiitos(true);
        } 
    }, [doCheck])

    return (
        <Form onSubmit={handleSubmit} className="col-md-4 p-3">
            <Form.Group>
                <Form.Label>Käyttäjätunnus</Form.Label>
                <Form.Control required type="text" placeholder="Käyttäjätunnus" value={kayttaja} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Salasana</Form.Label>
                <Form.Control required type="password" placeholder="Salasana" value={salasana}/>
            </Form.Group>
            <Button variant="primary" type="submit">Kirjaudu</Button>
        </Form>
    );
}

export default LogIn;