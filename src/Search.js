import React,{useEffect,useState} from 'react'
import './App2.css';
import sanitizeHtml from 'sanitize-html';
import {Menu} from './function/functionlist'
import Chat from './Chat';
import { useTranslation } from 'react-i18next';
function Search() 
{
    const username = localStorage.getItem("student_username")
    const lol = localStorage.getItem("id");
    const [corr,setcorr] = useState([]);
    const { t } = useTranslation(); 
    const checksearch = () =>
    {
            const item = JSON.parse( (localStorage.getItem("course")));
            console.log(item);
            setcorr(item);
          
    }
    useEffect(()=>
    {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ECC9EE"
           checksearch() 
           
        
    },[])
    const resultcheck = () => corr.length===0;
    
    const  printdata = (id) =>
{
  const lol = localStorage.getItem("id");
  var recd ={"student": lol,"course" :id }
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
 return(

        <div className="grid-container">
        <Menu/>
     <div className = "message">
             <h1>Search Results</h1>
           
     </div>
     <div className="courses">
             {
                    resultcheck()
                    ?<div className ="coursecontainers"> <h1>No results found</h1> </div>
                :  <div className="coursecontainer">
                
                   {corr.map((soi) => {
                        return (
                        <div className="coursecontainer"> 
                          <br/> <a href={"users/course/"+ soi._id}> <span>{soi.name}</span></a>
                          <br/> <span>{t("Faculty")}:{soi.facname}</span>
          <br/> <span>{t("Stream")}:{t(soi.stream)}</span>
          <br/> <span>{t("Difficulty")}:{t(soi.price)}</span>
                          <br/> <button className="add" onClick={()=> printdata(soi._id)}>Add Course</button> 
                        </div>
                        )
                    })}
             
                
                
                 </div>
             }
  
    </div>
    <div>
        <Chat username={username} id={lol}/>
    </div>
    </div>
 )
 
  
 
}
export default Search;