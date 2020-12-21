import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Col, Image, Container, Row } from 'react-bootstrap';
import {Link, NavLink, Switch, Route, BrowserRouter as Router, useHistory, withRouter, Redirect, useLocation} from 'react-router-dom'
import './Home.css';
import susaseve5 from '../images/susaseve5.jpg';


function Home() {
    return (
        <Container className="homePaaDiv" fluid>
            <Row className="pt-2">
                <Col md={{ span: 6, offset: 4 }} xs={{ span: 6, offset: 3 }}>
                    <h6 className="homeOtsikko">Severi & Susanna</h6>
                </Col>
            </Row>
            <Row >
                <Col md={{ span: 4, offset: 5 }} xs={{ span: 6, offset: 3 }}>
                    <h6 className="homeAlateksti pb-1">22.01.2022</h6>
                </Col>
            </Row> 
            <Row className="p-4">
                <Col  md={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 3 }}>
                    <Image src={susaseve5} fluid rounded/>
                </Col> 
            </Row>
        </Container>
    );
}

export default Home;