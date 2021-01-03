import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tab,Tabs, Sonnet } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './Control.css';
import Taulukko from './Taulukko';



function Control() {

    const [ilmoittautuneet, setIlmoittautuneet] = useState([]);

    useEffect( () => {
        const haeIlmoittautuneet = async (i) => {
            const url = "http://127.0.0.1:3000/Ilmoittautuneet"; // REst API url
    
            const response = await fetch(url);
            let t = await response.json();
            setIlmoittautuneet(t.data);
        }

        haeIlmoittautuneet();
            
    }, [])

    const ilmOtsikko = [<tr><th>Etunimi</th><th>Sukunimi</th><th>Sähköposti</th><th>Allergiat</th><th>Aikinen vai LApsi</th></tr>]
    // map content to table
    const sisaltoIlm = ilmoittautuneet.map((t, index) => {
        return <tr key={index}>
            <td key={index + 0.1}>{t.Etunimi}</td>
            <td key={index + 0.2}>{t.Sukunimi}</td>
            <td key={index + 0.3}>{t.sposti}</td>
            <td key={index + 0.4}>{t.allergiat}</td>
            <td key={index + 0.5}>{t.aikuinen}</td>
        </tr>
    });

    return (
        <Container className="controlPaaDiv" fluid>
            <Tabs defaultActiveKey="Ilmoittautuneet">
                <Tab eventKey="Ilmoittautuneet" title="Ilmoittautuneet">
                    <Taulukko otsikko={ilmOtsikko} sisalto = {sisaltoIlm}/>
                </Tab>
                <Tab eventKey="spostit" title="Sähköpostit">
                    
                </Tab>
                <Tab eventKey="Allergiat" title="Allergiat">
                    
                </Tab>
                <Tab eventKey="Eritelty" title="Eritelty">
                    
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Control;