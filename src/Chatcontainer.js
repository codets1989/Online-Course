import React, { useState, useEffect , useRef} from 'react'
import axios from "axios";
import { v4 as uuidv4} from "uuid";
import { useTranslation } from 'react-i18next';
import sanitizeHtml from 'sanitize-html';
const ChatContainer = ({ currentChat, currentUser, socket ,userid }) =>

{
  const handleSendMsg = async (msg,username,socket,currentChat,userid) => {
    var dend = sanitizeHtml(msg)
    socket.emit("send-msg", {
      to: username,
      from: currentChat,
      message: dend,
    });
    const aram  = [...messages]
            const msg3s= aram.concat({
             fromSelf: true,
              message: dend,
             });
            setMessages(msg3s)
            setMsg('');
  if (currentChat === "Chatbot")
  {
    await axios.post("http://192.168.1.66:105/hello/", {
      from: userid,
      to: currentChat,
      message: dend,
      id:username
    }).then(response => {const aram  = [...messages]
      const nemsg = aram.concat({fromSelf:true,message:msg},response.data) 
      setMessages(nemsg)})
  } 
  else
  { 

    await axios.post("http://localhost:8000/message/addmsg/", {
      from: userid,
      to: currentChat,
      message: msg,
      id:username
    })
  }
   
}
    const [messages, setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const scrollRef = useRef();  
    const [msg, setMsg] = useState("");
    const { t } = useTranslation(); 
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);
    useEffect(() => {

        const fetchData = async () => {
          if(currentChat){
            const response = await axios.post("http://localhost:8000/message/getmsg/", {
              from: userid,
              to: currentChat,
            });
            console.log(response.data)
            setMessages(response.data);
          }
        }
        fetchData();
      }, [currentChat]);
    const sendChat = (e)=>{
        e.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg,currentUser,socket,currentChat,userid);
            
        }
    }
    console.log(socket)
  // useEffect(() => {
  //   if (socket) {
  //     alert("Hello")
  //   }
  // }, []);
  socket.emit("msg-recieved", (msg) => {
    setArrivalMessage({
      fromSelf: false,
      message: msg,
    });
    alert("Bye")
  })
  useEffect(()=>{
    arrivalMessage && setMessages((prev)=>[...prev,arrivalMessage]);
  },[arrivalMessage])
   return(
    <div>
         <div className="chat-messages">
              {messages.map((message) => {
                return (
                  <div ref={scrollRef} key={uuidv4()}>
                    <div 
                      className={`messagese ${message.fromSelf ?
                        "sended" :
                        "recieved"
                        }`}
                    >
                      <div className="content ">
                        <p>{message.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
         <div className='send_msg'>
                    <form onSubmit={(e)=>sendChat(e)}>
                    <input type="text" className='send_text' value={msg} onChange={(e)=>{setMsg(e.target.value)}}  ></input> <button>{t("Send")}</button>
                    </form>
                </div>
    </div>
   )
}
export default ChatContainer