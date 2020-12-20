import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link, NavLink, Switch, Route, BrowserRouter as Router, useHistory, withRouter, Redirect, useLocation} from 'react-router-dom'



function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="">Moisiot2022</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink style={{paddingRight: '1em' , color: 'white' }} to="/">Etusivu</NavLink>
                        <NavLink style={{ color: 'white' }} to="/SignUp">Ilmoittautuminen</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
