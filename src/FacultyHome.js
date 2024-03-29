import React,{ useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import logo from './images/user.png'
import top1 from './images/reading.png'
import top2 from './images/read.png'
import top3 from './images/study.png'
import log from './images/logout.png'
import Facultyadd from './Facultyadd';
import Facultyall from './Facultyall';
import FacultyVerified from './FacultyVerified';
import FacultyUnVerified from './FacultyUnverified';
import { chee ,logoutt} from './function/facultyfunlist';
import Chat from './Chat';
import './Faculty.css';
function FacultyHome()
{
     const { t } = useTranslation();
     const [datas, setdatas] = useState();
     const [tl,settl] = useState([[],[],[]])
     const [isLoading, setLoading] = useState(true);
     const item = localStorage.getItem("facid");
     const lol = localStorage.getItem("faculty_username");
     let i =0;
     useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
         document.body.style.backgroundColor = "#ECC9EE"
         top();
            checklogin();
           

     },[])
     const top = async() => 
    {
           const item = localStorage.getItem("facid");
           const rec = {"id":item};
           console.log(item);
            await fetch('http://localhost:8000/faculty/top',{
                mode: 'cors',
                 method :'POST',
                 headers : {
                     'Accept' : 'application/json',
                     'Content-type' : 'application/json'
                 },
                 body:JSON.stringify(rec)
             }).then((result)=>result.json()).then(data=>{
                console.log(data.length);
                data.sort((r1, r2) => (r1.size > r2.size) ? -1 : (r1.size < r2.size) ? 1 : 0);
                for (i=0;i<data.length;i++)
                {
                  tl[i] = data[i]
                }
                console.log(tl[0])
                })
                
            }
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
                localStorage.setItem("faculty_username",data.username);
                setLoading(false)
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
          else if (a===2)
          {
               setch(<FacultyVerified/>)
          }
          else if (a===3)
          {
               setch(<FacultyUnVerified/>)
          }

     }
     if (isLoading) {
          return <div className="App">Loading...</div>;
        }
    return(
             <div className="grid">
                <div className="facmenu">
                    
                       <span className='clicke' onClick={()=>chpage(0)}>{t("Add Course")}</span>
                       <span className='clicke' onClick={()=>chpage(1)}>{t("All Courses")}</span>
                       <span className='clicke'  onClick={()=>chpage(2)}>{t("Verified Courses")}</span>
                       <span  className='clicke' onClick={()=>chpage(3)}>{t("Unverified Courses")}</span>
                       <div className='faclog' onClick={()=>logoutt()}><span className='logi'>{t("Logout")}<img src = {log} alt="logout" className="logout" height="25" width="25"/></span></div>
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
                       <span className='weltext'> {t("Welcome")} {datas}</span>
                       </div>
                       <div className='top-courses'>
                        <span className='titl-top'>{t("Your Top Courses")}</span>
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
                <div>
                    <Chat username={lol} id={item}/>
                </div>
             </div>
    )

}
export default FacultyHome;
