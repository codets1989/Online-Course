
import { useState, useEffect } from "react";
const Adminban = () =>
{
    const [data, setdata] = useState([]);  
    useEffect(()=>{
         checkusers('students');    
    },[])
    const handleinput = (e) =>
    {
        checkusers(e.target.value)
    }
    const checkusers = (id) =>
    {
           const rec = {"id":id};
        //    console.log(item);
            fetch('http://localhost:8000/admin/' + rec.id,{
                mode: 'cors',
                 method :'GET',
                 headers : {
                     'Accept' : 'application/json',
                     'Content-type' : 'application/json'
                 },
             }).then((result)=>result.json()).then(data=>{
                setdata(data);
                })
                
            }
const  banusers = (id) =>
            {
                const bann = document.querySelector(".banselect").value
                   const rec = {"id":id,"ban":bann};
                //    console.log(item);
                    fetch('http://localhost:8000/admin/ban' ,{
                        mode: 'cors',
                         method :'POST',
                         headers : {
                             'Accept' : 'application/json',
                             'Content-type' : 'application/json'
                         },
                         body:JSON.stringify(rec),
                     }).then((result)=>result.json()).then(data=>{
                        checkban(data)
                        })
                        
                    }
const checkban = (msg)=>
{
    if (msg==undefined)
    {

    }
    else if (msg.success === true)
    {
        const p = document.getElementById(msg.id)
        p.innerHTML= "User Banned"
    }
}                    
    return(
        <div>
        <div className="bantitle">
        <h2 className="tabtitle">Ban Table</h2>
        <select className="banselect" name="options" onChange={(e)=>handleinput(e)}>
            <option value="students">Students</option>
            <option value="faculties">Faculties</option>
        </select>
        </div>
        <table className="factable">
           <thead className="factabhead">
               <tr>
                   <th>Full Name</th>
                   <th>Username</th>
                   <th>Action</th>
               </tr>
           </thead>
           <tbody>
           {
    
    data.map((item)=>
    {
      return(
        <tr key={item._id}>
       
            <th>{item.fullname}</th>
            <th>{item.username}</th>
            <th>  { <button id={item._id} onClick={()=>banusers(item._id)}>Ban this User</button>}</th>
            
           
             </tr>
      )
    })
}
</tbody>

</table>
        </div>
    )
}
export default Adminban
