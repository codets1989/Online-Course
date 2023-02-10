import React,{ useState, useEffect} from 'react';
import logo from './images/web-camera.png'
import Facultyadd from './Facultyadd';
import Facultyall from './Facultyall';
import FacultyVerified from './FacultyVerified';
import FacultyUnVerified from './FacultyUnverified';
import './Faculty.css';
function FacultyHome()
{
     const [datas, setdatas] = useState();
     useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
     
            checklogin();
     },[])
    const checklogin = () =>
    {
           const item = localStorage.getItem("facid");
           const rec = {"id":item};
           console.log(item);
            fetch('http://localhost:8000/faculty/users',{
                mode: 'cors',
                 method :'POST',
                 headers : {
                     'Accept' : 'application/json',
                     'Content-type' : 'application/json'
                 },
                 body:JSON.stringify(rec)
             }).then((result)=>result.json()).then(data=>{
                setdatas(data.username);
                })
                
            }
     const [ch,setch] = useState(<Facultyadd/>)
     const chpage = (a) =>
     {
          if (a===0)
          {
               setch(<Facultyadd/>)
          }
          else if(a===1)
          {
               setch(<Facultyall/>)
          }
          else if (a==2)
          {
               setch(<FacultyVerified/>)
          }
          else if (a==3)
          {
               setch(<FacultyUnVerified/>)
          }

     }
    return(
             <div className="grid">
                <div className="facmenu">
                       <a onClick={()=>chpage(0)}>Add Course</a>
                       <a onClick={()=>chpage(1)}>All Courses</a>
                       <a onClick={()=>chpage(2)}>Verified Courses</a>
                       <a onClick={()=>chpage(3)}>Unverified Courses</a>
                </div>
      
                <div className='adcourse'>
                {ch}
                {/* 
                <Route exact path = {["/faculty/uncourses" ]}>
                     <Navbar  /> 
    
                </Route>
                <Route exact path = {["/faculty/courses/:cid" ]}>
                     <Navbar  /> 
    
                </Route>
                <Route exact path = {["/faculty/courses/update/:cid" ]}>
                     <Navbar  /> 
    
                </Route> */}

             
                </div>
          
                <div className='user_details'>
                    <div className='profile'>
                       <img src={logo} alt='usericon' height='300'  width='300' className='userlogo'/> 
                       <span className='weltext'>Welcome {datas}</span>
                       </div>
                       <div className='top-courses'>
                        <span className='titl-top'>Your Top Courses</span>
                       </div>
                </div>
             </div>
    )

}
export default FacultyHome;
