import React,{ useState, useEffect} from 'react';
import { chee , adminlogout } from '../function/facultyfunlist';
import Adminban from './Adminban';
import Adminstats from './Adminstats';
import logo from '../images/user.png'
import top1 from '../images/reading.png'
import top2 from '../images/read.png'
import top3 from '../images/study.png'
import log from '../images/logout.png'
import Adminun from './Adminun';
import  '../Faculty.css';
function AdminHome()
{
    var i = 0;
    const [isLoading, setLoading] = useState(true);
     const [datas, setdatas] = useState();
     const [tl,settl] = useState([[],[],[]])
     useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
     
            checklogin();
            top();
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
            const top = async() => 
            {
                    await fetch('http://localhost:8000/admin/top',{
                        mode: 'cors',
                         method :'GET',
                         headers : {
                             'Accept' : 'application/json',
                             'Content-type' : 'application/json'
                         },
                     }).then((result)=>result.json()).then(data=>{
                        console.log(data.length);
                        for (i=0;i<data.length;i++)
                        {
                          tl[i] = data[i]
                        }
                        setLoading(false)
                        console.log(tl[0])
                        })
                        
                    }
     const [ch,setch] = useState(<Adminun/>)
     const chpage = (a) =>
     {
          if (a===0)
          {
               setch(<Adminun/>)
          }
          else if(a===1)
          {
               setch(<Adminban/>)
          }
          else if (a==2)
          {
               setch(<Adminstats/>)
          }
      

     }
     if (isLoading) {
        return <div className="App">Loading...</div>;
      }
    return(
             <div className="grid">
                <div className="facmenu">
                       <a className='clicke' onClick={()=>chpage(0)}>Unverified Courses</a>
                       <a  className='clicke' onClick={()=>chpage(1)}>Ban User or Faculty</a>
                       <a className='clicke' onClick={()=>chpage(2)}>Stats of the System</a>
                       <div className='faclog' onClick={()=>adminlogout()}><span className='logi'>Logout<img src = {log} alt="logout" className="logout" height="25" width="25"/></span></div>
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
                        <div className='topl'>
                        <img src={top1} alt='usericon' height='50'  width='50' className='toplogo'/><p>{chee(tl[0])}</p> 
                        </div>
                        <div className='topl' >
                        <img src={top2} alt='usericon' height='50'  width='50' className='toplogo'/> <p>{chee(tl[1])}</p> 
                        </div>
                        <div className='topl'>
                        <img src={top3} alt='usericon' height='50'  width='50' className='toplogo'/> <p>{chee(tl[2])}</p> 
                        </div>
                       </div>
                </div>
             </div>
    )

}
export default AdminHome;
