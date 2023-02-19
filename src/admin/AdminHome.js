import React,{ useState, useEffect} from 'react';
import logo from '../web-camera.png'
import Adminun from './Adminun';
import  '../Faculty.css';
function AdminHome()
{
     const [datas, setdatas] = useState();
     useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
     
            checklogin();
     },[])
    const checklogin = () =>
    {
           const item = localStorage.getItem("adid");
           const rec = {"id":item};
        //    console.log(item);
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
     const [ch,setch] = useState(<Adminun/>)
     const chpage = (a) =>
     {
          if (a===0)
          {
               setch(<Adminun/>)
          }
        //   else if(a===1)
        //   {
        //        setch(<Facultyall/>)
        //   }
        //   else if (a==2)
        //   {
        //        setch(<FacultyVerified/>)
        //   }
        //   else if (a==3)
        //   {
        //        setch(<FacultyUnVerified/>)
        //   }

     }
    return(
             <div className="grid">
                <div className="facmenu">
                       <a onClick={()=>chpage(0)}>Unverified Courses</a>
                       <a onClick={()=>chpage(1)}>Ban User or Faculty</a>
                       <a onClick={()=>chpage(2)}>Progress of the System</a>
                </div>
      
                <div className='adcourse'>
                {ch}
            

             
                </div>
          
                <div className='user_details'>
                    <div className='profile'>
                       <img src={logo} alt='usericon' height='300'  width='300' className='userlogo'/> 
                       <span className='weltext'>Welcome {datas}</span>
                       </div>
                       <div className='top-courses'>
                        <span className='titl-top'>Top Courses</span>
                       </div>
                </div>
             </div>
    )

}
export default AdminHome;
