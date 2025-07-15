import "./lists.css"
import UserInfo from "../lists/UserInfo/Userinfo.jsx"
import ChatList from "../Chats/ChatLists/ChatLists.jsx"
const Lists = () => {
  return (
    <div className='lists'>
      <UserInfo/>
      <ChatList/>
      
    </div>
  )
}

export default Lists