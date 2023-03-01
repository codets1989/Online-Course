import {useEffect,useState} from 'react';
import { useParams} from 'react-router-dom'
import {Menu} from './function/functionlist'
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
        <Menu/>
     
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