import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './SignUp.css';



function SignUp() {

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
      };
    return (
        <Container className="signUpPaaDiv" fluid>
            <Row>
                <Col>
                    <h6>Tähän kohti ohjeet kirjautumiseen</h6>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit} className="col-md-5">
                <Form.Group className="pr-2">
                    <Form.Label>Etunimi</Form.Label>
                    <Form.Control required type="text" placeholder="Etunimesi" />
                </Form.Group>
                <Form.Group className="pr-2">
                    <Form.Label>Sukunimi</Form.Label>
                    <Form.Control required type="text" placeholder="Sukunimi" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sähköposti</Form.Label>
                    <Form.Control required type="email" placeholder="example@email.fi" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Allergiat</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Allergiat" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Valitse toinen</Form.Label>
                    <Form.Control as="select">
                        <option>Aikuinen</option>
                        <option>Lapsi</option>
                    </Form.Control>
                </Form.Group>
                <Button type="submit">Ilmoittaudu</Button>
            </Form>
        </Container>
    );
}

export default SignUp;