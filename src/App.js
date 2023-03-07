
import './Navbar.css';
import Navbar from './Navbar';
import Navbartext from './Navbartext';
import FacNavbar from './FacNavbar';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AdminNavbar from './admin/AdminNavbar';

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
     <Route exact path = {["/faculty/:facid","/faculty/course/:courseid"]}>
     <FacNavbar/>
    
     </Route>
     <Route exact path = {["/admin/:adid","/admin/course/:courseid"]}>
     <AdminNavbar/>
    
     </Route>
    </Switch>
     </Router>
  );
}

export default App;
