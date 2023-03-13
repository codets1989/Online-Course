import React from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
const Facna = () => {
      const {t} = useTranslation();
      return(
        <div className="unavbar">
        
      
         <ul className="Register">
    <li> <a href="/faclogin">{t("Login")}</a></li>
    <li>  <a href="/facreg">{t("Register")}</a> </li>
    </ul>
        </div>
      )
}
export default Facna;
