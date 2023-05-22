import React ,{ useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { dropdata , printdata , Menu} from "./function/functionlist";
import { useTranslation } from 'react-i18next';
import Chat from "./Chat";
const UserCoursepage= () =>
{
    const { t } = useTranslation(); 
    let i=0;
    const username = localStorage.getItem("student_username")
    const lol = localStorage.getItem("id");
    const {courseid} = useParams();
    const [cordata,setcordata] = useState([
     
    ]);
    const vid = (vi) =>
    {
       const vis = vi.length-1
       console.log(vi)
       let content = []
       for(i=0; i<=vis;i++)
       {
           content.push( <div className="videocon"> <h2 className="titecon">{t("Video")}{"  " + i}</h2> <video height="420" width="880" controls> <source src={vi[i]}></source></video> </div> )
          
       }
       return content
    }
    const adds = ( ca , io) =>
    {
        const cat = localStorage.getItem("id")
         if (ca.includes(cat))
         {
            return(
           <button className="Drop sos" onClick={()=>dropdata(io)}>{t("Drop Course")}</button>
            )
         }
         else{
            console.log(ca)
            return(
                <button className="add sos" onClick={()=>printdata(io)}>{t("Add Course")}</button>
            )
          
         }
    }
const checkcourse = () =>
      {
        const lol = courseid;
        const rec = {"id":lol};
    //    console.log(rec);
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
            })
        }
        useEffect(()=>
        {
         document.body.style.backgroundColor = "#ECC9EE"   
         checkcourse();
         
        },[]
        )
    
 return(
    <div className="grid-container">
        <Menu/>
        <div className="cospage">
        {cordata.map((item) => {
          return (
          <div className="coscon" > 
             <a href={item._id} className="cortitle" ><h2>{item.name}</h2></a>
           {vid(item.video)}
              {adds(item.students,item._id) }
          </div>
          )
      })}
      </div>
      <div>
        <Chat username={username} id={lol}/>
    </div>
    </div>
 )
}
export default UserCoursepage