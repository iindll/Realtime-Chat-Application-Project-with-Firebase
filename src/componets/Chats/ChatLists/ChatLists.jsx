import "./ChatLists.css"
import SearchIcon from "../../../assets/search.svg"
import add from "../../../assets/add.svg"
import minus from "../../../assets/minus.svg"
import avatar2 from "../../../assets/avatar2.jpeg"
import { useState } from "react"

const ChatLists = () => {
  const [addMode,setAddMode]= useState(true)

  return (
    <div className='chats'>
      <div className="search">
        <div className="searchBar">
       <img src={SearchIcon} alt="" />
       <input type="text" placeholder="Search" />
        </div>
               <img onClick={()=>setAddMode((prev)=>!prev)} 
               className="add" 
               src={addMode ?add : minus} alt="" />
      </div>
   <div className="item">
      <img src={avatar2} alt="" />
      <div className="text">
      <span>Nada Elsheakh</span>
      <p>Hi miss you</p></div>
      </div>
      <div className="item">
      <img src={avatar2} alt="" />
      <div className="text">
      <span>Nada Elsheakh</span>
      <p>Hi miss you</p></div>
      </div>
      <div className="item">
      <img src={avatar2} alt="" />
      <div className="text">
      <span>Nada Elsheakh</span>
      <p>Hi miss you</p></div>
      </div>
      <div className="item">
      <img src={avatar2} alt="" />
      <div className="text">
      <span>Nada Elsheakh</span>
      <p>Hi miss you</p></div>
      </div>
         <div className="item">
      <img src={avatar2} alt="" />
      <div className="text">
      <span>Nada Elsheakh</span>
      <p>Hi miss you</p></div>
      </div>
         <div className="item">
      <img src={avatar2} alt="" />
      <div className="text">
      <span>Nada Elsheakh</span>
      <p>Hi miss you</p></div>
      </div>
    </div>
  )
}

export default ChatLists


