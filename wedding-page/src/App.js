import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Home from './components/Home';
import Info from './components/Info'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Control from './components/Control'
import { Container } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import React, { useState } from 'react';


/*
Thsi is the startingpoint for my react app.
I use react router to navigate in pages. For layout I'm using bootstrap.
*/
function App() {

  // useState and function are used to login to control page
  const [user, setUser] = useState(null);
  const loginDone = (loggedUser) => { setUser(loggedUser); }
  
  return (
    <Container className="p-0" fluid>
      <Router> 
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Info" component={Info} />
          <Route path="/Control">
            {
              user?
              <Control/>: <LogIn onLogin={(user) => loginDone(user)}/>
            }
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
