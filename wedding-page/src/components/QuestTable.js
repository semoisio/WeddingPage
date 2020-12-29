import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button,Container } from 'react-bootstrap';
import React, { useContext, useState } from 'react';

function QuestTable(props) {

    //const [quests, setQuests] = useContext(DataContext);

    //console.log("Vieraat : ", quests);
    const sisalto = props.data.map((t, index) => {
        return <tr key={index}>
            <td key={index + 0.1}>{t.etunimi}</td>
            <td key={index + 0.2}>{t.sukunimi}</td>
            <td key={index + 0.3}>{t.sposti}</td>
            <td key={index + 0.4}>{t.allergiat}</td>
            <td key={index + 0.5}>{t.aikuinen}</td>
            <td key={index + 0.6}><button onClick={() => muutaArvoja(t, index)}>Muuta</button></td>
        </tr>
    });

    const muutaArvoja = (t, i) => {
        props.palautus(t.etunimi, t.sukunimi, t.sposti, t.allergiat,t.aikuinen);
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
            null : <Button variant="success" className="col-md-2">Testi</Button>
        }
        </Container>
    );
}

export default QuestTable;