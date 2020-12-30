import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup } from 'react-bootstrap';
import React, { useState, useContext } from 'react';

/**
 * This component have introductions how to use sign up
 */

function Introduction() {


    return (
        <Container fluid className="m-0 p-0">
            <h3 className="col-md-5">Tervetuloa ilmoittautumaan häihimme</h3>
            <ListGroup as="ul" className="col-md-7 pb-5">    
                <ListGroup.Item as="li">1. Lue ensiksi ohjeet</ListGroup.Item>
                <ListGroup.Item as="li">2. Pääset aloittamaan ilmoittautumisen alla olevasta kuvakkeesta</ListGroup.Item>
                <ListGroup.Item as="li">3. Täytä kysytyt tiedot</ListGroup.Item>
                <ListGroup.Item as="li">4. "Lisää" kuvakkeesta henkilö siirtyy vieressä olevaan taulukkoon (tässä vaiheessa ilmoittautuminen ei ole vielä valmis)</ListGroup.Item>
                <ListGroup.Item as="li">5. Pystyt ilmoittamaan koko perheesi kerralla, kun lisäät vain yksi kerraallaan henkilöt taulukkoon</ListGroup.Item>
                <ListGroup.Item as="li">6. Jos huomaat virheen tiedoissa paina vain muuta nappia henkilön kohdalta taulukosta ja pääset muokkaamaan tietoja (muista tämän jälkeen lisätä henkilö takaisin tauluun)</ListGroup.Item>
                <ListGroup.Item as="li">7. Saatat ilmoittautumisen loppuun kun olet lisännyt vähintään yhden hekilön taulukkoon. Sen jälkeen sinulle ilmestyy kuvake joka päättää ilmoittaumisen</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Introduction;