import React , {useState} from 'react';
import { handlenep, handleng } from '../function/navfunlist';
import logo from '../images/home.png'
import { useTranslation } from 'react-i18next';
const AdminNavbar = () =>
{
    const { t } = useTranslation(); 
    const link = localStorage.getItem("adid")
    const [lang, setLang] = useState('en');
    return(
        <div className='faclang'>
        <div className='facho'><a href={'//localhost:3000/admin/'+ link}><img src={logo} height="40" width="50" alt="homeicon"/></a></div>
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
export default AdminNavbar;