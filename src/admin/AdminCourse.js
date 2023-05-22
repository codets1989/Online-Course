import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { verify , adminlogout} from '../function/facultyfunlist';
import logo from '../images/user.png'
import log from '../images/logout.png'
import  '../Faculty.css';
const  AdminCourse = () =>
{
    var i = 0;
    const {courseid}= useParams();
    const [isLoading, setLoading] = useState(true);
    const [cordata,setcordata] = useState([]);
     const [datas, setdatas] = useState();
     const [tl,settl] = useState([[],[],[]])
     useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
         document.body.style.backgroundColor = "#ECC9EE"
            checklogin();
            checkcourse();
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
          
const checkcourse = () =>
    {
        const lol = courseid;
        const rec = {"id":lol};
                  console.log(rec);
        fetch('http://localhost:8000/courseid',{
            mode: 'cors',
            method :'POST',
            headers : {
               'Accept' : 'application/json',
               'Content-type' : 'application/json'
                },
            body:JSON.stringify(rec)
            }).then((result)=>result.json()).then(data=>{
            console.log(data);
            setcordata(data)
            setLoading(false)
            })
    }
const vid = (vi) =>
    {
       const vis = vi.length-1
       console.log(vi)
       let content = []
       for(i=0; i<=vis;i++)
       {
           content.push( <div className="videocon"> <h2 className="titecon">{"Video  "+i}</h2> <video height="420" width="880" controls> <source src={vi[i]}></source></video> </div> )
       }
       return content
    }
     
if (isLoading) {
        return <div className="App">Loading...</div>;
      }
    return(
             <div className="grid-container">
               <div className='menuu'>
               <div className='adprofile'>
                       <img src={logo} alt='usericon' height='300'  width='300' className='userlogo'/> 
                       <span className='weltext'>Welcome {datas}</span>
                       <div className='adfaclog' onClick={()=>adminlogout()}><span className='logi'>Logout<img src = {log} alt="logout" className="logout" height="25" width="25"/></span></div>
                       </div>
               </div>
               <div className="cospage">
        {cordata.map((item) => {
          return (
          <div className="coscon" > 
             <a href={item._id} className="cortitle" ><h2>{item.name}</h2></a>
           {vid(item.video)}
           <button id={item._id} onClick={()=>{verify(item._id)}}>Verify this Course</button>
          </div>
          )
      })}
      </div>
            

             
            \
          
             </div>
    )

}
export default AdminCourse;