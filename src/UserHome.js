import React,{useEffect, useState} from 'react';
import Coursedetails from './Coursedetails';
import {Menu} from './function/functionlist'
import not from './images/notification.png'
import rednot from './images/rednot.png'
import cross from './images/close.png'
import Chat from './Chat';
import './App2.css';
import { useTranslation } from 'react-i18next';
function UserHome()
{
    const {t} = useTranslation();
    const [datas, setdatas] = useState();
    const [course,setcourse] = useState([]);
    const [interest,setinterest] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const item = localStorage.getItem("id");
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
            localStorage.setItem("student_username",datas);
            setcourse(data.courses);
            setLoading(false)
            })
            
        }
   const checknot = () =>
   {
    
    const lala = {"body":item};
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
   const notswitch = () =>
   {
    const noimage = document.querySelector('.notimg')
    noimage.src = not
    const nolol = document.querySelector('.nottext')
    nolol.style.display="block"
   }
   const nottswitch = () =>
   {
    const noimage = document.querySelector('.notdiv')
    noimage.style.display="none"
   }
    useEffect(()=>
    {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ECC9EE"
           checklogin();
           checknot();
        //  document.querySelector('.container').style.display = "none";
    },[])
    if (isLoading) {
        return <div className="App">Loading...</div>;
      }
    return (
        <div className="grid-container">
           <Menu/>
        <div className="message">
            <h1> {t("Welcome")} {datas} </h1>
            <div className="coursemessage">
            <h1>  {t("Courses You have enrolled in")} </h1>
        </div>
        </div>
        <div className="courses">
        { isLoggedIn()
        ? <div className="coursecontainers"><h1> {t("You have not enrolled in any course.To enroll in a course plz Search or add them from the menu in left side")}</h1> </div>
        : <Coursedetails course={course}/>
      }
      <div className='notdiv'>
            <div className='nottext'>
                 
                <span>  {t("According to your interests we think you")}  <img src={cross} height="20px" width="20px" className='crossimg' onClick={()=>nottswitch()} ></img>  {t("might like")} {interest.map((item)=>
            {
            localStorage.setItem("cor",item._id);
                return(
                    <span style={{color:"blue"}}>{item.name}</span>
            )})
            }</span>
                <br></br>
                <button className='add notbutton' onClick={()=>printdata()}> {t("Add Course")}</button>
                </div>
           <img src={rednot} height="50px" width="50px" className='notimg' onClick={()=>notswitch()}></img>
           </div>
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
        <div>
            <Chat username={datas} id={item}/>
        </div>
        </div>
    )
    
}
export default UserHome