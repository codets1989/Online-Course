import React,{useState,useEffect} from "react";
import { chea , emp  } from "./function/facultyfunlist";
const FacultyUnVerified = () =>
{
    let i=0;
    const [corpdata,setcorpdata] = useState([
     
    ]);
    useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
     
            checkall();
     },[])
     const checkall = () =>
    {
           const item = localStorage.getItem("facid");
           const rec = {"id":item};
           console.log(item);
            fetch('http://localhost:8000/faculty/unverified',{
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
     const vid = (vi) =>
     {
        const vis = vi.length-1
        console.log(vi)
        let content = []
        for(i=0; i<=vis;i++)
        {
            content.push( <p>{vi[i]}</p>)
           
        }
        return content
     }
    console.log("HEllo")
    return(
        <div>
        <h2 className="tabtitle">Unverified Courses</h2>
        <table className="factable">
           <thead className="factabhead">
               <tr>
                   <th>Course Name</th>
                   <th>Status</th>
                   <th>Stream</th>
                   <th>Price</th>
                   <th>No. of Videos</th>
                   <th>No. of Students</th>
               </tr>
           </thead>
           <tbody>
            {
            emp(corpdata)
            ?<tr className="emp"><td >No results</td><td >No results</td><td >No results</td><td >No results</td><td >No results</td><td >No results</td> </tr>
            : console.log()

}
   {
    
       corpdata.map((item)=>
       {
         return(
           <tr key={item._id}>
          
               <th>{item.name}</th>
               <th>{item.status}</th>
               <th>{item.stream}</th>
               <th>Rs. {item.price}</th>
               <th>{item.video.length}</th>
               <th>{chea(item.students)}</th>
                {/* {vid(item.video)} */}
              
                </tr>
         )
       })
   }
   </tbody>
   {/* <video controls>
        <source src="https://firebasestorage.googleapis.com/v0/b/onlinecourse-d2dad.appspot.com/o/files%2F308193858_2083086195203608_1505347907310128676_n.mp4?alt=media&token=dfab208c-fc19-4053-9c20-ee61bc818169"/>
   </video> */}
</table>
</div>
    )
}
export default FacultyUnVerified;