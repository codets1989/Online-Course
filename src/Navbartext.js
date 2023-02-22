import React,{useState} from 'react';
import logo from './images/home.png'
import './Navbar.css';
function Navbartext() {

    const [usersearch,setusersearch] =  useState ();
    const link = localStorage.getItem("id")
    const handleinput = (e) =>
    {
        const value = e.target.value;
        setusersearch(value)
    }
    const loghandlere =(e)=>
    {
        const dend = {"course":usersearch}
        console.log(dend);
        e.preventDefault();
         fetch('http://localhost:8000/Search',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(dend)
         }).then((result)=>result.json()).then(data=>{bkkk(data)})
        }
    const bkkk = (data) =>{
     localStorage.setItem("course",JSON.stringify(data));
     window.location.replace("/searchresults");
    }    
    return(
    <div className = "navcontainer">
        <div>

        </div>
        <div>
         <form className="search-bar" onSubmit={loghandlere}>
            <div className='searchtag'>
         <input type="text" name="usersearch" id="usersearch" defaultValue={usersearch} onChange={handleinput} placeholder="Search" />
         </div>
         <button type="submit">Search</button>
        
        
         </form> 
         </div>
         <div> <a href={'//localhost:3000/users/'+ link}><img src={logo} height="40" width="50" alt="homeicon"/></a></div>

     
         
    </div>
    )
}
export default Navbartext;