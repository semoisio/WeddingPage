import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Image, Container, Row } from 'react-bootstrap';
import './Home.css';
import { useHistory } from 'react-router-dom'


function LogIn() {
    const [kayttaja, setKayttaja] = useState('');
    let h = useHistory();
    const [virhe, setVirhe] = useState('');
    return (
        <Form className="col-md-6">
            <Form.Group>
                <Form.Label>Käyttäjätunnus</Form.Label>
                <Form.Control required type="text" placeholder="Käyttäjätunnus" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Salasana</Form.Label>
                <Form.Control required type="password" placeholder="Salasana" />
            </Form.Group>
            <Button variant="primary" type="submit">Kirjaudu</Button>
        </Form>
    );
}

export default LogIn;