import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link, NavLink, Switch, Route, BrowserRouter as Router, useHistory, withRouter, Redirect, useLocation} from 'react-router-dom'



function Home() {
    return (
        <div>
            <h6>Toimiiko kotisivu</h6>
        </div>
    );
}

export default Home;