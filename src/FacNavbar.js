import React from 'react';
import logo from './images/home.png'
const FacNavbar = () =>
{
    const link = localStorage.getItem("facid")
    return(
        <div className='facho'><a href={'//localhost:3000/faculty/'+ link}><img src={logo} height="40" width="50" alt="homeicon"/></a></div>
    )
}
export default FacNavbar;