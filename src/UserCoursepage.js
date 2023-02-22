import React ,{ useState , useEffect } from "react";
import { useParams } from "react-router-dom";
const UserCoursepage= () =>
{
    let i=0;
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
           content.push( <div className="videocon"> <h2 className="titecon">{"Video  "+i}</h2> <video height="420" width="880" controls> <source src={vi[i]}></source></video> </div> )
          
       }
       return content
    }
    const adds = ( ca,ia) =>
    {
         if (ca === true)
         {
            return(
           <button className="add">Add Course</button>
            )
         }
         else{
            console.log(ca)
            return(
                <button className="Drop">Drop Course</button>
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
         checkcourse();
         
        },[]
        )
    
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
        <div className="cospage">
        {cordata.map((item) => {
          return (
          <div className="coscon" > 
             <a href={item._id} className="cortitle" ><h2>{item.name}</h2></a>
           {vid(item.video)}
              {adds(item.success,item._id) }
          </div>
          )
      })}
      </div>
    </div>
 )
}
export default UserCoursepage