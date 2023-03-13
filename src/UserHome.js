import React,{useEffect, useState} from 'react';
import Coursedetails from './Coursedetails';
import {Menu} from './function/functionlist'
import './App2.css';
function UserHome()
{
    const [datas, setdatas] = useState();
    const [course,setcourse] = useState([]);
    const [interest,setinterest] = useState([]);
 
    const isLoggedIn = () =>
    {
        if (course.length===0)
        {
            console.log("zerocourse");
            return true;
        }
        else{

            return false;
        }
    }
     
    const checklogin = () =>
{
       const item = localStorage.getItem("id");
       const rec = {"id":item};
       console.log(item);
        fetch('http://localhost:8000/users',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(rec)
         }).then((result)=>result.json()).then(data=>{
             console.log(data.courses);
            setdatas(data.username)
            setcourse(data.courses);
            })
            
        }
   const checknot = () =>
   {
    const lala = {"body":"lol"};
    fetch('http://localhost:8000/notifications',{
        mode: 'cors',
         method :'POST',
         headers : {
             'Accept' : 'application/json',
             'Content-type' : 'application/json'
         },
         body:JSON.stringify(lala)
     }).then((result)=>result.json()).then(data=>{
       setinterest(data)
        })
   }
   const closeb = () =>
   {
       document.querySelector(".notification").style.display = "none";
       console.log(interest);
   }
     
   const  printdata = () =>
   {
     const lol = localStorage.getItem("id");
     const id = localStorage.getItem("cor");
     const recd ={"student": lol,"course" :id }
      fetch('http://localhost:8000/addcourses',{
               mode: 'cors',
                method :'PUT',
                headers : {
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                },
                body:JSON.stringify(recd)
            }).then();
          Navigate();
   }
   const Navigate = () =>
   {
      const lol = localStorage.getItem("id");
      window.location.replace("/users/"+lol)
   }   
    useEffect(()=>
    {
        document.body.style.backgroundImage = "none";
    
           checklogin();
           checknot();
        //  document.querySelector('.container').style.display = "none";
    },[])
    return (
        <div className="grid-container">
           <Menu/>
        <div className="message">
            <h1> Welcome {datas} </h1>
            <div className="coursemessage">
            <h1> Courses You have enrolled in </h1>
        </div>
        </div>
        <div className="courses">
        { isLoggedIn()
        ? <div className="coursecontainers"><h1>You have not enrolled in any course.To enroll in a course plz Search or add them from the menu in left side</h1> </div>
        : <Coursedetails course={course}/>
      }
      {/* <div className="notification">
      <button id="close" onClick={closeb}>*</button>
            <span id= "notxt"> From our guess , we think you might like {interest.map((item)=>
            {
            localStorage.setItem("cor",item._id);
                return(
                    <span>{item.course_name}</span>
            )})
            }
        <span>  </span>       Do you want to add this Course? </span>
           <br/> <button  className="add" onClick={()=> printdata()}>Add Course</button>

        </div> */}
        </div>
        
        </div>
    )
    
}
export default UserHome