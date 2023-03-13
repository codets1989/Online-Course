import React,{useState} from 'react';
import './App.css'
function FacultyLogin()
{
    const [userregis,setuserregis] =  useState ({
        username:"",
        password:""
    });
    const handleinput = (e) =>
    {
        const name = e.target.name;
        const value =e.target.value;
        setuserregis({...userregis,[name]:value})
    }
    const loghandler =(e)=>
    {
        const dend = JSON.stringify(userregis);
        e.preventDefault();
         fetch('http://localhost:8000/faculty/login',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:dend
         }).then((result)=>result.json()).then(data=>{
          check(data)  })
        
    }
    const check = (la) =>
    {
            if (la.success === true)
            {
                
                if(la.id === "63ee52954046fcb6888c5475")
                {
                localStorage.setItem("adid",la.id);
                window.location.replace("/admin/"+la.id)
                }
                else
                {
                localStorage.setItem("facid",la.id);
                window.location.replace("/faculty/"+la.id)
                }
            }
            else{
                alert('Wrong details');
                window.location.replace("/faclogin");
            }
    }
    return(
        <div className="container">
            <div className="title">Faculty Login</div>
      <div className="form">
      <form className="form1" action="http://localhost:8000/faculty/login" method="POST" onSubmit={loghandler} >
          
          <div>
            <label htmlFor="Username">Username</label>
            <input type ="text" name="username" id="username"  className='regin' value={userregis.username} onChange={handleinput}  placeholder="Enter your Username" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type ="password" name="password" id="password" className='regin'  value={userregis.password}  onChange={handleinput}  placeholder="Enter your password"/>
        </div>
        
       <button className="form2" type="submit" >Login</button>
       <br></br>
      </form>
      <li>  <a href="/Login">For User login click here</a> </li>
        </div>
        </div>
    );
} 
export default FacultyLogin;
