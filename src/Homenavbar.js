import React from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
const HomeNavbar = () => {
      const {t} = useTranslation();
      return(
        <div className="homenavbar">
        
      
         <ul className="Register">
    <li> <a href="/Login">{t("Login")}</a></li>
    <li>  <a href="/Register">{t("Register")}</a> </li>
    </ul>
        </div>
      )

}
export default HomeNavbar;
