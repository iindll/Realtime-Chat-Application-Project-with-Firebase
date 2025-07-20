import "./AddUSer.css"
import avatra from "../../assets/Avatar1.jpeg"
const AddUSer = () => {
  return (
    <div className='AddUSer'>
        <form>
         <input type="text" name="Username" id="username" />
         <button>Serach</button>
        </form>
        <div className="user">
         <div className="detail">
            <img src={avatra} alt="" />
            <span>Samar Mohaned</span>
         </div>
         <button>Add user</button>
        </div>
    </div>
  )
}

export default AddUSer