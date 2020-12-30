import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import { DataContext } from './SignUp';

import QuestTable from './QuestTable';



function Formi(props) {
    // useState for form
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [allergies, setAllergies] = useState("");
    const [aikuinen, setAikuinen] = useState("Aikuinen");
    const [data, setData] = useState([]);
   
    //This is datacontext where i restore all of the quests
    const [quests, setQuests] = useContext(DataContext);

    // This fuctions handles changes of form inputs and saves it to useState
    const firstnameChanged = (event) => {
        setFirstname(event.target.value);
    }
    const lastnameChanged = (event) => {
        setLastname(event.target.value);
    }
    const emailChanged = (event) => {
        setEmail(event.target.value);
    }
    const allergiesChanged = (event) => {
        setAllergies(event.target.value);
    }
    const aikuinenChanged = (event) => {
        if (aikuinen === "Aikuinen") {
            setAikuinen("Lapsi");
        } else {
            setAikuinen("Aikuinen")
        }
    }
    const clear = () => {
        setFirstname("");
        setLastname("");
        //setEmail("");
        setAllergies("");
    }
    // This fuction saves all the values to datacontext
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            let t = quests;
            t.push({ Etunimi: firstname, Sukunimi: lastname, sposti: email, allergiat: allergies, aikuinen: aikuinen });
            setData(t);
            setQuests(t);
            clear();
            event.preventDefault();
        }

    };

    const returnValues = (etu, taka, spo, all, aik) => {
        setFirstname(etu);
        setLastname(taka);
        setEmail(spo);
        setAllergies(all);
        setAikuinen(aik);

        
    }

    return (
        <Row>
            <Form onSubmit={handleSubmit} className="col-md-5">
                <Form.Group><p>Pakollinen*</p></Form.Group>
                <Form.Group className="pr-2">
                    <Form.Label>Etunimi *</Form.Label>
                    <Form.Control required type="text" placeholder="Etunimi" value={firstname} onChange={(evt) => firstnameChanged(evt)} />
                </Form.Group>
                <Form.Group className="pr-2">
                    <Form.Label>Sukunimi *</Form.Label>
                    <Form.Control required type="text" placeholder="Sukunimi" value={lastname} onChange={(evt) => lastnameChanged(evt)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sähköposti *</Form.Label>
                    <Form.Control required type="email" placeholder="example@email.fi" value={email} onChange={(evt) => emailChanged(evt)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Allergiat</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Allergiat" value={allergies} onChange={(evt) => allergiesChanged(evt)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Valitse toinen</Form.Label>
                    <Form.Control value={aikuinen} as="select" onChange={(evt) => aikuinenChanged(evt)}>
                        <option value="Aikuinen">Aikuinen</option>
                        <option value="Lapsi">Lapsi</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="success" className="col-md-2" type="submit">Lisää</Button>
            </Form>
            <QuestTable  data={data} palautus={returnValues} loppu={props.loppu} kiitos={props.kiitos} />
        </Row>
    );
}

export default Formi;