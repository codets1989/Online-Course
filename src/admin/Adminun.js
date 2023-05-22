import React,{useState,useEffect} from "react";
import { useTranslation } from 'react-i18next';
import { emp } from "../function/facultyfunlist";
const Adminun = () =>
{
    const { t } = useTranslation(); 
    const [corpdata,setcorpdata] = useState([
     
    ]);
    useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
            checkall();
     },[])
     const checkall = () =>
    {
           const item = localStorage.getItem("adid");
           const rec = {"id":item};
           console.log(item);
            fetch('http://localhost:8000/admin/unverified',{
                mode: 'cors',
                 method :'POST',
                 headers : {
                     'Accept' : 'application/json',
                     'Content-type' : 'application/json'
                 },
                 body:JSON.stringify(rec)
             }).then((result)=>result.json()).then(data=>{
                setcorpdata(data);
                })
                
            }
            
    //  const vid = (vi) =>
    //  {
    //     const vis = vi.length-1
    //     console.log(vi)
    //     let content = []
    //     for(i=0; i<=vis;i++)
    //     {
    //         content.push( <p>{vi[i]}</p>)
           
    //     }
    //     return content
    //  }
     const verify = (id) =>
     {
        const item = localStorage.getItem("adid");
        const rec = {"id":id,"item":item};
        fetch('http://localhost:8000/admin/verify',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(rec)
         }).then((result)=>result.json()).then(data=>{
            cha(data);
            })
     }
     const cha = (la) =>
     {
             if (la.success === true)
             {
                const p = document.getElementById(la.id)
                p.innerHTML = "Course Verified"
             }
             else{
                console.log(la)
                console.log("something went wrong")
             }
     }
    return(
        <div>
        <h2 className="tabtitle">{t("Unverified Courses")}</h2>
        <table className="factable">
           <thead className="factabhead">
               <tr>
                   <th>{t("Course Name")}</th>
                   <th>{t("Status")}</th>
                   <th>{t("Stream")}</th>
                   <th>{t("Difficulty")}</th>
                   <th>{t("No. of Videos")}</th>
                   <th>{t("No. of Students")}</th>
               </tr>
           </thead>
           <tbody>
            {
            emp(corpdata)
            ?<tr className="emp"><td >{t("No results")}</td><td >{t("No results")}</td><td >{t("No results")}</td><td >{t("No results")}</td><td >{t("No results")}</td><td >{t("No results")}</td> </tr>
            : console.log()

}
   {
    
       corpdata.map((item)=>
       {
         return(
           <tr key={item._id}>
          
               <th><a href={"course/"+ item._id}>{item.name}</a></th>
               <th>{item.status}</th>
               <th>{item.stream}</th>
               <th>{item.price}</th>
               <th>{item.video.length}</th>
               <th>  { <button id={item._id} className="veriff" onClick={()=>{verify(item._id)}}>Verify this Course</button>}</th>
               
              
                </tr>
         )
       })
   }
   </tbody>
 
</table>
</div>
            
               
                 
                 
                     
                   
          
        
    )
}
export default Adminun;