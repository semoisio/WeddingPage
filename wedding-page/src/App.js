import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Home from './components/Home';
import Info from './components/Info'
import SignUp from './components/SignUp'
import { Container } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Container fluid>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Info" component={Info} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
