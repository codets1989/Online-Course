import {useEffect,useState} from 'react';
import './App2.css'
import { useTranslation } from 'react-i18next';
function Coursedetails(course)
{
    const { t } = useTranslation(); 
    const [corpdata,setcorpdata] = useState([
     
    ]);
  const checkcourse = () =>
  {
       const rec = {"id":course};
    //    console.log(rec);
        fetch('http://localhost:8000/checkcourses',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(rec)
         }).then((result)=>result.json()).then(data=>{
            //  console.log(data);
             setcorpdata(data)
            })
  }
  const dropdata = (id) =>
  {
    const lol = localStorage.getItem("id");
    const recd ={"student": lol,"course" :id }
     fetch('http://localhost:8000/dropcourses',{
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
    document.body.style.backgroundColor = "#ECC9EE"
    checkcourse();
  },[]
  )
  return(
      <div className="courses" >
    {corpdata.map((item) => {
        return (
        <div className="coursecontainer"> 
          <br/> <a href={"course/"+ item._id}> <span>{item.name}</span></a>
          <br/> <span>{t("Faculty")}:{item.facname}</span>
          <br/> <span>{t("Stream")}:{t(item.stream)}</span>
          <br/> <span>{t("Difficulty")}:{t(item.price)}</span>
          <br/> <button className="Drop" onClick={()=> dropdata(item._id)}>{t("Drop Course")}</button> 
        </div>
        )
    })}
       </div>
  )
}
export default Coursedetails;