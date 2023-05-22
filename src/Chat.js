import React ,{useState,useEffect,useRef} from "react";
import { showchat } from './function/navfunlist'
import io from 'socket.io-client'; 
import axios from "axios";
import { useTranslation } from 'react-i18next';
import ChatContainer from "./Chatcontainer";
import Contactts from "./Contactts";
const Chat = (username) =>
{
      const { t } = useTranslation(); 
    const [contacts,setcontacts] = useState([])
    const [msg, setMsg] = useState("");
    const [messages, setMessages] = useState([]);
    const [currentChat, setCurrentChat] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const scrollRef = useRef();
    const socket = io.connect('http://localhost:9000');
    socket.emit("add-user",username.id);
    const usernames = username.username
    const userid = username.id
    console.log(username)
   useEffect(()=>
   {
    setCurrentUser(username.id)
   },[]
   )
    const changeCurrentChat = ( contact) => { 
      setCurrentChat(contact)
  };
  const getcontacts = async () => {
   const responses= await axios.get("http://localhost:8000/message/getcontacts/", {
    });
    console.log(responses.data)
   setcontacts(responses.data)
  }
    // useEffect(() => {

    //     const fetchData = async () => {
    //       if(currentChat){
    //         const response = await axios.post("http://localhost:8000/message/getmsg/", {
    //           from: currentUser,
    //           to: currentChat,
    //         });
    //         console.log(response.data)
    //         setMessages(response.data);
    //       }
    //     }
    //     fetchData();
    //   }, [currentChat]);
    useEffect(()=>
    {
      if (usernames ==="Admin")
      {
        getcontacts()
      }
      else if(usernames ==="none")
      {
         setCurrentChat("Chatbot")
         
      }
      else
      {
         setCurrentChat("Admin")
      }
    }
        
    ,[])
    const handleChatChange = (chat) =>{
      setCurrentChat(chat);
    }
    const joinRoom = () => {
    
        socket.emit("add-user", username);
      };
    return(
        <div className='chat' >
        <div className='msgcontainer'>
            <div className='userscont'>
              { 
    
                  usernames==="Admin"?
                  <Contactts array={contacts}  changeChat={handleChatChange} />:usernames==="none"?<div><p className="contactcont" onClick={()=>changeCurrentChat("Chatbot")}>Chatbot</p>
                  </div>:<div><p className="contactcont" onClick={()=>changeCurrentChat("Admin")}>Admin</p><p className="contactcont" onClick={()=>changeCurrentChat("Chatbot")}>Chatbot</p> </div>

        
                  
              }
              
                 
            </div>
            <div className='msgsent'>
                 <ChatContainer currentChat={currentChat} socket={socket} currentUser={usernames} userid={userid} />
              
            </div>
        </div>
       <p className="chatopener"  onClick={showchat}>{t("Chat")}</p>
    </div>
    )
}
export default Chat