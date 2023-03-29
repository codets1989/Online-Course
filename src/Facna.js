import React ,{useState}from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { handlenep,handleng } from './function/navfunlist';
const Facna = () => {
      const {t} = useTranslation();
      const [lang, setLang] = useState('en');
      return(
        <div className="unavbar">
        
      
         <ul className="Register">
    <li> <a href="/faclogin">{t("Login")}</a></li>
    <li>  <a href="/facreg">{t("Register")}</a> </li>
    </ul>
    <div class="dropdown">
        <li>Language
        <i className="fa fa-caret-down"></i>
      </li>
          <div class="dropdown-content">
          <a href="#" onClick={handleng}>English</a>
          <a href="#" onClick={handlenep}>Nepali</a>
          </div>
         </div>
        </div>
      )
}
export default Facna;
