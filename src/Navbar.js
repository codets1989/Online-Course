import React , {useState} from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { handlenep, handleng } from './function/navfunlist';
const Navbar = () => {
        const { t} = useTranslation();
        const [lang, setLang] = useState('en');
     return(
        <div className="unavbar">
        
      
         <ul className="Register">
    <li> <a href="/Login">{t("Login")}</a></li>
    <li>  <a href="/Register">{t("Register")}</a> </li>
    </ul>
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
export default Navbar;
