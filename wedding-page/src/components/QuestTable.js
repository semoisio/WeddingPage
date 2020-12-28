import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { DataContext } from './SignUp';
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
            <td key={index + 0.6}><button>Muuta</button></td>
        </tr>
    });

    return (
        <div className="col-md-6">
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
        </div>
    );
}

export default QuestTable;