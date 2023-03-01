import React from 'react'
import log from '../images/logout.png'
const dropdata = (id) =>
{
  const lol = localStorage.getItem("id");
  const recd ={"student": lol,"course" :id }
   fetch('http://localhost:8000/dropcourses',{
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
const  printdata = (id) =>
{
  const lol = localStorage.getItem("id");
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
const logoutt = (e)=>
{
    localStorage.removeItem("id")
    Navhome();
}
const Navhome = () =>
{
   window.location.replace("http://localhost:3000")
}  
const Menu = () =>
{
    return(
    <div className="menu">
           <h1 className='ltitle'>List of Courses</h1>
           <br/> <a href="/users/stream/Science" className='alist'> <span className="spanlist">Science </span> </a>
           <br/>  <a href="/users/stream/Arts" className='alist'>  <span className="spanlist">Arts</span> </a>
           <br/>   <a href="/users/stream/Humanities" className='alist'>  <span className="spanlist">Humanities</span> </a>
           <br/>  <a href="/users/stream/Management" className='alist'>  <span className="spanlist">Management</span> </a>
           <br/>  <a href="/users/stream/Coding" className='alist'>  <span className="spanlist">Coding</span> </a>
           <div className='log' onClick={()=>logoutt()}><span className='logi'>Logout<img src = {log} alt="logout" className="logout" height="25" width="25"/></span></div>
      </div>
    )
}
export {dropdata , printdata , Menu}