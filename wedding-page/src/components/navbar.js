import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'



function Navigation() {
    return (
        <Container fluid className="p-0">
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="" className="pr-5">Moisiot2022</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink style={{paddingRight: '1em' , color: 'white' }} to="/">Etusivu</NavLink>
                        <NavLink style={{paddingRight: '1em' , color: 'white' }} to="/SignUp">Ilmoittautuminen</NavLink>
                        <NavLink style={{ color: 'white' }} to="/Info">Info</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;
