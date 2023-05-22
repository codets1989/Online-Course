import React,{useState} from 'react';
import Chat from './Chat';
import './App.css'
import { useTranslation } from 'react-i18next';
import sanitizeHtml from 'sanitize-html';
function Login()
{
    const { t } = useTranslation(); 
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
        var dend = JSON.stringify(userregis);
        var dend = sanitizeHtml(dend)
        e.preventDefault();
         fetch('http://localhost:8000/Login',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:dend
         }).then((result)=>result.json()).then(data=>{
          check(data)   })
        
    }
    const check = (la) =>
    {
            if (la.success === true)
            {
                localStorage.setItem("id",la.id);
                window.location.replace("/users/"+la.id)
            }
            else{
                alert('Wrong details');
                window.location.replace("/Login");
            }
    }
    return(
        <div className="container">
            <div className="title">{t("User Login")}</div>
      <div className="form">
      <form className="form1" action="http://localhost:8000/Login" method="POST" onSubmit={loghandler} >
          
          <div>
            <label htmlFor="Username">{t("Username")}</label>
            <input type ="text" name="username" id="username" value={userregis.username} className='regin' onChange={handleinput}  placeholder={t("Enter your Username")} />
        </div>
        <div>
            <label htmlFor="password">{t("Password")}</label>
            <input type ="password" name="password" id="password" value={userregis.password} className='regin' onChange={handleinput}  placeholder={t("Enter your password")}/>
        </div>
        
       <button className="form2" type="submit" >{t("Login")}</button>
       <br></br>
      </form>
      <li>  <a href="/faclogin">{t("For Faculty login click here")}</a> </li>
        </div>
        <div>
        <Chat username="none" id="none"/>
        </div>
        </div>
    );
} 
export default Login;
