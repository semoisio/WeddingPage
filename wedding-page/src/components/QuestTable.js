import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

function QuestTable(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [doPost, setDoPost] = useState(0);
    let i = 0; 

    const taulu = []; 
    
    // manipulate data to right format 
    const muunnaSyote = () =>{
       props.data.map((t) => {
            if(t.aikuinen === "Aikuinen"){
                taulu.push({ Etunimi: t.Etunimi, Sukunimi: t.Sukunimi, sposti: t.sposti, allergiat: t.allergiat, aikuinen: true });
            }else{
                taulu.push({ Etunimi: t.Etunimi, Sukunimi: t.Sukunimi, sposti: t.sposti, allergiat: t.allergiat, aikuinen: false });
            }
        });
    };

    const handleSingUp = () => {
        handleClose();
        setDoPost(doPost+1);
    };

    const clearArray = (a) => {
        while (a.length) {
            a.pop();
        }
    };
    
    useEffect( () => {
        const lisaaAuto = async (i) => {
            console.log("lISÄYS ALKAA");
            const data = taulu[i]; // data what I'm using
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
    }, [doPost])
    
    // map content to table
    const sisalto = props.data.map((t, index) => {
        return <tr key={index}>
            <td key={index + 0.1}>{t.Etunimi}</td>
            <td key={index + 0.2}>{t.Sukunimi}</td>
            <td key={index + 0.3}>{t.sposti}</td>
            <td key={index + 0.4}>{t.allergiat}</td>
            <td key={index + 0.5}>{t.aikuinen}</td>
            <td key={index + 0.6}><button onClick={() => muutaArvoja(t, index)}>Muuta</button></td>
        </tr>
    });

    // This methods allows to change values in from table
    const muutaArvoja = (t, i) => {
        props.palautus(t.etunimi, t.sukunimi, t.sposti, t.allergiat, t.aikuinen);
        props.data.splice(i, 1); // delete quest from array 
    };


    return (
        <Container className="col-md-6 p-0">
            <Table striped bordered hover variant="light" >
                <thead>
                    <tr>
                        <th>Etunimi</th>
                        <th>Sukunimi</th>
                        <th>Sähköposti</th>
                        <th>Allergiat</th>
                        <th>Aikuinen vai Lapsi</th>
                        <th>Muuta</th>
                    </tr>
                </thead>
                <tbody>
                    {sisalto}
                </tbody>
            </Table>
            {
                props.data.length == 0 ?
                    null : <Button onClick={handleShow} variant="success" className="col-md-2">Ilmoittaudu</Button>
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ilmoittaudu</Modal.Title>
                </Modal.Header>
                <Modal.Body>Olethan lisännyt jo kaikki</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Palaa ilmoittautumiseen</Button>
                    <Button variant="primary" onClick={handleSingUp}>Kyllä</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default QuestTable;