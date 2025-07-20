import "./Details.css"
import arrowUp from "../../assets/arrowUp.svg"
import arrowdown from "../../assets/arrowdown.svg"
import download from "../../assets/download.svg"
import photo2022 from "../../assets/photo2022.jpeg"
import avatar from "../../assets/avatar2.jpeg"
const Details = () => {
  return (
    <div className='Details'>
      <div className="user-details">
        <img src={avatar} className="user-img" alt="" />
        <h2>Sara Noor</h2>
        <p>Don’t wait for the perfect moment</p>
      </div>

      <div className="info">
  <div className="option">
      <div className="title">
        <span>Chat Settings</span>
        <img src={arrowUp} alt="" />
      </div>
    </div>
    
    

    <div className="option">
      <div className="title">
        <span>Privacy & Help</span>
        <img src={arrowUp} alt="" />
      </div>
    </div>

    <div className="option">
      <div className="title">
        <span>Shared Photos</span>
        <img src={arrowdown} alt="" />
      </div>
      <div className="photo">
        <div className="photoItem">
          <div className="photoDetails">
          <img src={photo2022} alt="" />
          <span>photo_2020_2.png</span>
          </div>
        <img className="downalod" src={download}alt="" />
      </div>
      <div className="photoItem">
          <div className="photoDetails">
          <img src={photo2022} alt="" />
          <span>photo_2020_2.png</span>
          </div>
        <img className="downalod" src={download}alt="" />
      </div><div className="photoItem">
          <div className="photoDetails">
          <img src={photo2022} alt="" />
          <span>photo_2020_2.png</span>
          </div>
        <img  className="downalod"src={download}alt="" />
      </div><div className="photoItem">
          <div className="photoDetails">
          <img src={photo2022} alt="" />
          <span>photo_2020_2.png</span>
          </div>
        <img className="downalod" src={download}alt="" />
      </div><div className="photoItem">
          <div className="photoDetails">
          <img src={photo2022} alt="" />
          <span>photo_2020_2.png</span>
          </div>
        <img  className="downalod" src={download}alt="" />
      </div>
      </div>
    </div>

    <div className="option">
      <div className="title">
        <span>Sherd File</span>
        <img src={arrowUp} alt="" />
      </div>
    </div>
  </div>
  <button className="Block-user">Block User</button>
  <button className="log-out">Log out</button>

</div>

  )
}

export default Details