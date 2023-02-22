import React from 'react';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import UserHome from './UserHome';
import Coursepage from './Coursepage';
import Search from './Search'
import Facultylogin from './Facultylogin'
import Facultyregister from './Facultyregister';
import FacultyHome from './FacultyHome';
import AdminHome from './admin/AdminHome'
import UserCoursepage from './UserCoursepage';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
function Change (){
    return (
        <Router>
        <div className="content">
            <Switch>
                <Route exact path="/">
                <Home/>
                </Route> 
                <Route exact path="/Register">
                <Register/>
                </Route>
                <Route exact path="/Login">
                <Login/>
                </Route>
                <Route exact path="/faclogin">
                <Facultylogin/>
                </Route>
                <Route exact path="/faculty/:facultyid">
                <FacultyHome/>
                </Route>
                <Route exact path="/admin/:adid">
                <AdminHome/>
                </Route>
                <Route exact path="/facreg">
                <Facultyregister/>
                </Route>
                <Route exact path="/users/:userid">
                <UserHome/>
                </Route>
                <Route exact path="/users/stream/:courseid">
                <Coursepage />
                </Route>
                <Route exact path="/users/course/:courseid">
                <UserCoursepage />
                </Route>
                <Route exact path="/searchresults">
                <Search />
                </Route>
            </Switch>
        </div>
        
        </Router>
    );
}
export default Change;