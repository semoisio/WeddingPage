import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tab,Tabs, Sonnet } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './Control.css';
import Taulukko from './Taulukko';



function Control() {

    const [ilmoittautuneet, setIlmoittautuneet] = useState([]);
    const [sahkopostit, setSahkopostit] = useState([]);
    const [allergiat, setAllergiat] = useState([]);
    const ilmOtsikko = [<tr><th>Etunimi</th><th>Sukunimi</th><th>Sähköposti</th><th>Allergiat</th><th>Aikinen vai LApsi</th></tr>];
    const emailOtsikko = [<tr><th>Sähköposti</th></tr>];
    const allergiaOtsikko = [<tr><th>Allergiat</th></tr>];


    const muunnaAikuiset = (ilm) => {
        return ilm.map((t) => {
            if(t.aikuinen === 1){
                return { Etunimi: t.Etunimi, Sukunimi: t.Sukunimi, sposti: t.sposti, allergiat: t.allergiat, aikuinen: "Aikuinen" };
            }else{
                return { Etunimi: t.Etunimi, Sukunimi: t.Sukunimi, sposti: t.sposti, allergiat: t.allergiat, aikuinen: "Lapsi" };
            }
        });

    }

    useEffect( () => {
        const haeIlmoittautuneet = async (i) => {
            const url = "http://127.0.0.1:3000/Ilmoittautuneet"; // REst API url
    
            const response = await fetch(url);
            let t = await response.json();
            if(t.status !== "NOT OK"){
                setIlmoittautuneet(muunnaAikuiset(t.data));
            }

            
        }

        haeIlmoittautuneet();
            
    }, [])

    useEffect( () => {
        const haeSahkopostit = async (i) => {
            const url = "http://127.0.0.1:3000/Spostit"; // REst API url
    
            const response = await fetch(url);
            let t = await response.json();
            if(t.status !== "NOT OK"){
                setSahkopostit(t.data);
            }

            
        }

        haeSahkopostit();
            
    }, [])

    useEffect( () => {
        const haeAllergiat = async (i) => {
            const url = "http://127.0.0.1:3000/Allergiat"; // REst API url
    
            const response = await fetch(url);
            let t = await response.json();
            if(t.status !== "NOT OK"){
                setAllergiat(t.data);
            }

            
        }

        haeAllergiat();
            
    }, [])

    
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

    // map content to table
    const sisaltoEmail = sahkopostit.map((t, index) => {
        return <tr key={index}>
            <td key={index + 0.1}>{t.sposti}</td>
        </tr>
    });

    // map content to table
    const sisaltoAllergia = allergiat.map((t, index) => {
        return <tr key={index}>
            <td key={index + 0.1}>{t.allergiat}</td>
        </tr>
    });

    return (
        <Container className="controlPaaDiv" fluid>
            <Tabs defaultActiveKey="Ilmoittautuneet">
                <Tab eventKey="Ilmoittautuneet" title="Ilmoittautuneet">
                    <Taulukko otsikko={ilmOtsikko} sisalto = {sisaltoIlm}/>
                </Tab>
                <Tab eventKey="spostit" title="Sähköpostit">
                    <Taulukko otsikko={emailOtsikko} sisalto = {sisaltoEmail}/>
                </Tab>
                <Tab eventKey="Allergiat" title="Allergiat">
                    <Taulukko otsikko={allergiaOtsikko} sisalto = {sisaltoAllergia}/>
                </Tab>
                <Tab eventKey="Eritelty" title="Eritelty">
                    
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Control;