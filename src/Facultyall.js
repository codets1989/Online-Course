import React,{useState,useEffect} from "react";
const Facultyall = () =>
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
            fetch('http://localhost:8000/faculty/all',{
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
            <video controls>
                 <source src="https://firebasestorage.googleapis.com/v0/b/onlinecourse-d2dad.appspot.com/o/files%2F308193858_2083086195203608_1505347907310128676_n.mp4?alt=media&token=dfab208c-fc19-4053-9c20-ee61bc818169"/>
            </video>
        </div>
    )
}
export default Facultyall;