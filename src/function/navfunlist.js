import i18next from "i18next";

const handleng = () => { 
   
   
    i18next.changeLanguage("en")
}
const handlenep = () => { 
   
   
    i18next.changeLanguage("ne")
}
const showchat = () =>
{
    const message_show = document.querySelector('.msgcontainer')
    const message_kolo = document.querySelector('.chat')
    if (message_show.style.display === "flex")
    {
        message_show.style.display = "none"; 
        message_kolo.style.width = "400px"; 
        message_kolo.style.height = "65px"; 
    }
    else
    {
        message_show.style.display = "flex";
        message_kolo.style.width = "540px"; 
        message_kolo.style.height = "470px"
    }
  
}
export {handleng,handlenep,showchat}