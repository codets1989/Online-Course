
import './Navbar.css';
import Navbar from './Navbar';
import Navbartext from './Navbartext';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
   
    <Router>
    <Switch>
      
    <Route exact path = {["/", "/Login", "/Register" ]}>
     <Navbar  /> 
    
     </Route>
     <Route exact path = {["/users/:userid" ,"/users/stream/:courseid","/searchresults","/users/course/:courseid"]}>
     <Navbartext/>
     </Route>
    </Switch>
     </Router>
  );
}

export default App;
