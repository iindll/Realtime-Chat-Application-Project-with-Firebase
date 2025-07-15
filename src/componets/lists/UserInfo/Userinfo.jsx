import "./userInfo.css"
import EditImg from "../../../assets/edit.svg"
import MoreImg from "../../../assets/more.svg"
import ViedoImg from "../../../assets/video.svg"
import avatar from "../../../assets/Avatar1.jpeg"
const Userinfo = () => {
  return (
    <div className='userInfo'>
      <div className="user">
        <img src={avatar} style={{width :50, height:50}}></img>
        <h3>Marya Noman</h3>
      </div>
      <div className="icons">
        <img src={MoreImg}></img>       
        <img src={EditImg}></img>
        <img src={ViedoImg}></img>


      </div>
    </div>
  )
}

export default Userinfo