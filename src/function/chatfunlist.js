import axios from "axios";
const handleSendMsg = async (msg,username,socket,currentChat,userid) => {
    socket.emit("send-msg", {
      to: username,
      from: currentChat,
      message: msg,
    });
    await axios.post("http://localhost:8000/message/addmsg/", {
      from: userid,
      to: currentChat,
      message: msg,
      id:username
    }).then()
   
}

export {handleSendMsg}