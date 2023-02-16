import React,{useState,useEffect} from "react";
const Adminun = () =>
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
     const verify = (id) =>
     {
        const rec = {"id":item};
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
                console.log("something went wrong")
             }
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
                         <button id={item._id} onclick={()=>verify(item._id)}>Verify this Course</button>
                        </div>
                   
                  )
                })
            }
        </div>
    )
}
export default Adminun;