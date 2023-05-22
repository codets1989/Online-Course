import React, { useState, useEffect , useRef} from 'react'
const Contactts = (array) =>
{
    console.log(array)
    const changeCurrentChat = (contact) => { 
        array.changeChat(contact);
    };
     return(
        <div >
            {
              array.array?.map((item)=>
              {
                return(
                <p  className='contactcont' onClick={()=>changeCurrentChat(item.userid)}> {item.username} </p> 
                )
              })
            }
             <p className='contactcont' onClick={()=>changeCurrentChat("Chatbot")}> Chatbot </p> 
        </div>
     )
}
export default Contactts