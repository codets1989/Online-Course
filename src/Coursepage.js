import {useEffect,useState} from 'react';
import { useParams} from 'react-router-dom'

function Coursepage ()
{
 const [cordata,setcordata] = useState([
     
 ]);
 const {courseid} = useParams();
 const checkcourse = () =>
{
      const lol = courseid;
       const rec = {"id":lol};
    //    console.log(rec);
        fetch('http://localhost:8000/courses',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(rec)
         }).then((result)=>result.json()).then(data=>{
            //  console.log(data);
             setcordata(data)
            })
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
const Navigate = () =>
{
   const lol = localStorage.getItem("id");
   window.location.replace("/users/"+lol)
}      
useEffect(()=>
{
 document.body.style.backgroundImage = "none";
 checkcourse();
 
},[]
)
// useEffect(() => {
//     console.log({cordata})
//   },[cordata])
return(
    <div className="grid-container">
         <div className="menu">
           <h1 className='ltitle'>List of Courses</h1>
           <br/> <a href="/users/stream/Science" className='alist'> <span className="spanlist">Science </span> </a>
           <br/>  <a href="/users/stream/Arts" className='alist'>  <span className="spanlist">Arts</span> </a>
           <br/>   <a href="/users/stream/Humanities" className='alist'>  <span className="spanlist">Humanities</span> </a>
           <br/>  <a href="/users/stream/Management" className='alist'>  <span className="spanlist">Management</span> </a>
           <br/>  <a href="/users/stream/Coding" className='alist'>  <span className="spanlist">Coding</span> </a>
      </div>
     
      {cordata.map((item) => {
          return (
          <div className="coursecontainer"> 
            <br/> <a href={"//localhost:3000/users/course/"+ item._id}> <span>{item.name}</span></a>
            <br/> <span>Faculty:{item.faculty}</span>
            <br/> <span>Stream:{item.stream}</span>
            <br/> <span>Price:{item.price}</span>
            <br/> <button className="add" onClick={()=> printdata(item._id)}>Add Course</button> 
          </div>
          )
      })}
      
   
    
    </div>
)
}
export default Coursepage;