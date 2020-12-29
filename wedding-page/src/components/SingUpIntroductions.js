import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState, useContext } from 'react';



function Introduction() {


    return (
        <Container fluid className="m-0 p-0">
            <h3 className="col-md-4">Tervetuloa ilmoittumaan häihimme</h3>
            <ol>    
                <li>Lue ensiksi ohjeet</li>
                <li>Pääset aloittamaan ilmoittautumisen alla olevasta kuvakkeesta</li>
                <li>Täytä kysytyt tiedot</li>
                <li>"Lisää" kuvakkeesta henkilö siirtyy vieressä olevaan taulukkoon (tässä vaiheessa ilmoittautuminen ei ole vielä valmis)</li>
                <li>Pystyt ilmoittamaan koko perheesi kerralla, kun lisäät vain yksi kerraallaan henkilöt taulukkoon</li>
                <li>Jos huomaat virheen tiedoissa paina vain muuta nappia henkilön kohdalta taulukosta ja pääset muokkaamaan tietoja (muista tämän jälkeen lisätä henkilö takaisin tauluun)</li>
                <li>Saatat ilmoittautuminen loppuun kun olet lisännyt vähintään yhden hekilön taulukkoon. Sen jälkeen sinulle ilmestyy kuvake joka päättää ilmoittaumisen</li>
            </ol>
        </Container>
    );
}

export default Introduction;