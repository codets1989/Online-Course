import React , {useState} from 'react';
import { handlenep, handleng } from '../function/navfunlist';
import logo from '../images/home.png'
const AdminNavbar = () =>
{
    const link = localStorage.getItem("adid")
    const [lang, setLang] = useState('en');
    return(
        <div className='faclang'>
        <div className='facho'><a href={'//localhost:3000/admin/'+ link}><img src={logo} height="40" width="50" alt="homeicon"/></a></div>
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
export default AdminNavbar;