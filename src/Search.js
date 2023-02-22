import React,{useEffect,useState} from 'react'
import './App2.css';
function Search() 
{
       
    const [corr,setcorr] = useState([]);
    const checksearch = () =>
    {
            const item = JSON.parse( (localStorage.getItem("course")));
            console.log(item);
            setcorr(item);
          
    }
    useEffect(()=>
    {
        document.body.style.backgroundImage = "none";
           checksearch() 
           
        
    },[])
    const resultcheck = () => corr.length===0;
    
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
const Navigate = () =>
{
   const lol = localStorage.getItem("id");
   window.location.replace("/users/"+lol)
}   
 return(

        <div className="grid-container">
        <div className="menu">
        <h1 className='ltitle'>List of Courses</h1>
           <br/> <a href="/course/Science" className='alist'> <span className="spanlist">Science </span> </a>
           <br/>  <a href="/course/Arts" className='alist'>  <span className="spanlist">Arts</span> </a>
           <br/>   <a href="/course/Humanities" className='alist'>  <span className="spanlist">Humanities</span> </a>
           <br/>  <a href="/course/Management" className='alist'>  <span className="spanlist">Management</span> </a>
           <br/>  <a href="/course/Coding" className='alist'>  <span className="spanlist">Coding</span> </a>
     </div>
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
                          <br/> <a href={"course/"+ soi._id}> <span>{soi.name}</span></a>
                          <br/> <span>Faculty:{soi.faculty}</span>
                          <br/> <span>Stream:{soi.stream}</span>
                          <br/> <span>Price:{soi.price}</span>
                          <br/> <button className="add" onClick={()=> printdata(soi._id)}>Add Course</button> 
                        </div>
                        )
                    })}
             
                
                
                 </div>
             }
  
    </div>
   
    </div>
 )
 
  
 
}
export default Search;