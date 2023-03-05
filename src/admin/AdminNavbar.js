import React from 'react';
import logo from '../images/home.png'
const AdminNavbar = () =>
{
    const link = localStorage.getItem("adid")
    return(
        <div className='facho'><a href={'//localhost:3000/admin/'+ link}><img src={logo} height="40" width="50" alt="homeicon"/></a></div>
    )
}
export default AdminNavbar;