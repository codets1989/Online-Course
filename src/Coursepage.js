import {useEffect,useState} from 'react';
import { useParams} from 'react-router-dom'
import {Menu} from './function/functionlist'
import Chat from './Chat';
import { useTranslation } from 'react-i18next';
function Coursepage ()
{
 const [cordata,setcordata] = useState([
     
 ]);
 const { t } = useTranslation(); 
 const {courseid} = useParams();
 const username = localStorage.getItem("student_username")
    const lol = localStorage.getItem("id");
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
 document.body.style.backgroundColor = "#ECC9EE"
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
            <br/> <span>{t("Faculty")}:{item.facname}</span>
            <br/> <span>{t("Stream")}:{t(item.stream)}</span>
            <br/> <span>{t("Difficulty")}:{t(item.price)}</span>
            <br/> <button className="add" onClick={()=> printdata(item._id)}>Add Course</button> 
          </div>
          )
      })}
      
   
    <div>
        <Chat username={username} id={lol}/>
    </div>
    </div>
)
}
export default Coursepage;