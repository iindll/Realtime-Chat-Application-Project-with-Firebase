import { useEffect, useRef, useState } from "react";
import "./Chats.css";
import avtar from "../../assets/Avatar1.jpeg";
import phone from "../../assets/phone.svg";
import video from "../../assets/video.svg";
import info from "../../assets/info.svg";
import emoji from "../../assets/emoji.svg";
import camera from "../../assets/camera.svg";
import mic from "../../assets/mic.svg";
import photo from "../../assets/img.svg";
import carvan from "../../assets/carvan.jpeg"
import EmojiPicker from "emoji-picker-react"

const Chats = () => {
  const [clicked, setClicked] = useState(false);
  const[open,setOpen] =useState(false)
  const [Text,setText]=useState("")
   const endRef = useRef(null)
  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 1000); 
    }
  };

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  })

  const handlEmoji = e=>{
setText((prev)=> prev+e.emoji) 
setOpen(false)

 }


  return (
    <div className="Chat">
      <div className="top">
        <div className="user">
          <img src={avtar} alt="" />
          <div className="text">
            <span>Noran Samy</span>
            <p>Let your smile spread sunshine</p>
          </div>
        </div>
        <div className="icons">
          <img src={phone} alt="" />
          <img src={video} alt="" />
          <img src={info} alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src={avtar} className="avatar-img" alt="" />
          <div className="texts">
            <p>Hey! Long time no see. How have you been?</p>
            <span>1 min ago</span>
          </div>
        </div>
         <div className="message-own">
          <div className="texts">
            <p>I’ve been good, just super busy with work. You?</p>
            <span>1 min ago</span>
          </div>
        </div> <div className="message">
          <img src={avtar} alt="" className="avatar-img" />
          <div className="texts">
            <p>Absolutely. Coffee this weekend?</p>
            <span>1 min ago</span>
          </div>
        </div> <div className="message-own">
          <div className="texts">
            <p>If you tried all this and it still doesn’t work</p>
            <span>1 min ago</span>
          </div>
        </div>
        
         <div className="message">
  <img src={avtar} className="avatar-img"alt="" />
  <div className="texts">
    <img src={carvan} className="message-img" alt="" />
    <p>Perfect! I’ll text you the details 💬</p>
    <span>1 min ago</span>
  </div>
</div>
<div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src={mic} alt="" />
          <img src={camera} alt="" />
          <img src={photo} alt="" />
        </div>

        <input type="text" placeholder="Type a message .." 
        onChange={(e)=> setText(e.target.value)}
        value={Text} />
        <div className="emoji">
          <img src={emoji} alt="" onClick={()=>setOpen(prev => !prev)}/>
          <div className="picker">  
          <EmojiPicker open={open} onEmojiClick={handlEmoji}/>
</div>

        </div>

        <button
          onClick={handleClick}
          className={clicked ? "activeBtn" : "sendBttoun"}
        >
          {clicked ? "Sent!" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chats;
