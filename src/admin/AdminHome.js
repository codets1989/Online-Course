import React,{ useState, useEffect} from 'react';
import { chee , adminlogout } from '../function/facultyfunlist';
import { useTranslation } from 'react-i18next';
import Adminban from './Adminban';
import Adminstats from './Adminstats';
import logo from '../images/user.png'
import top1 from '../images/reading.png'
import top2 from '../images/read.png'
import top3 from '../images/study.png'
import log from '../images/logout.png'
import Adminun from './Adminun';
import  '../Faculty.css';
import Chat from '../Chat';
function AdminHome()
{
    const { t } = useTranslation(); 
    var i = 0;
    var output=[]
    const [isLoading, setLoading] = useState(true);
     const [datas, setdatas] = useState();
     const [tl,settl] = useState([[],[],[]])
    //  const compare = (a,b) =>
    //  {
    //     if (a.size > b.size) {
    //         return 1;
    //       }
    //       if (a.size < b.size) {
    //         return -1;
    //       }
    //       return 0;

    //  }
     useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
         document.body.style.backgroundColor = "#ECC9EE"
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
                        data.sort((r1, r2) => (r1.size > r2.size) ? -1 : (r1.size < r2.size) ? 1 : 0);
                         console.log(output)
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
                       <a className='clicke' onClick={()=>chpage(0)}>{t("Unverified Courses")}</a>
                       <a  className='clicke' onClick={()=>chpage(1)}>{t("Ban User or Faculty")}</a>
                       <a className='clicke' onClick={()=>chpage(2)}>{t("Stats of the System")}</a>
                       <div className='faclog' onClick={()=>adminlogout()}><span className='logi'>{t("Logout")}<img src = {log} alt="logout" className="logout" height="25" width="25"/></span></div>
                </div>
      
                <div className='adcourse'>
                {ch}
            

             
                </div>
          
                <div className='user_details'>
                    <div className='profile'>
                       <img src={logo} alt='usericon' height='300'  width='300' className='userlogo'/> 
                       <span className='weltext'>{t("Welcome")} {datas}</span>
                       </div>
                       <div className='top-courses'>
                        <span className='titl-top'>{t("Top Courses")}</span>
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
                    <Chat username="Admin" id="Admin"/>
                </div>
             </div>
    )

}
export default AdminHome;
