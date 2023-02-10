import React,{useState,useEffect} from "react";
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
            {
                corpdata.map((item)=>
                {
                  return(
                    <div>
                        <p>{item.name}</p>
                        <p>{item.status}</p>
                        <p>{item.stream}</p>
                        <p>{item.price}</p>
                         {vid(item.video)}
                        </div>
                  )
                })
            }
        </div>
    )
}
export default FacultyUnVerified;