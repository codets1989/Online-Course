import React,{useState} from 'react';
import { handlenep,handleng } from './function/navfunlist';
import logo from './images/home.png'
import { useTranslation } from 'react-i18next';
import sanitizeHtml from 'sanitize-html';
import './Navbar.css';
function Navbartext() {
    const { t } = useTranslation();
    const [lang, setLang] = useState('en');
    const [usersearch,setusersearch] =  useState ();
    const link = localStorage.getItem("id")
    const handleinput = (e) =>
    {
        const value = e.target.value;
        setusersearch(value)
    }
    const loghandlere =(e)=>
    {
        var usersee = sanitizeHtml(usersearch)
        var dend = {"course":usersee}
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
        <div> <a href={'//localhost:3000/users/'+ link}><img src={logo} height="40" width="50" alt="homeicon"/></a></div>
        </div>
        <div>
         <form className="search-bar" onSubmit={loghandlere}>
            <div className='searchtag'>
         <input type="text" name="usersearch" id="usersearch" defaultValue={usersearch} onChange={handleinput} placeholder={t("Search")} className='regin' />
         </div>
         <button type="submit">{t("Search")}</button>
        
        
         </form> 
         </div>
      
         <div class="dropdown">
        <li>{t("Language")}
        <i className="fa fa-caret-down"></i>
      </li>
          <div class="dropdown-content">
          <a href="#" onClick={handleng}>{t("English")}</a>
          <a href="#" onClick={handlenep}>{t("Nepali")}</a>
          </div>
         </div>
    
       
     
         
    </div>
    )
}
export default Navbartext;