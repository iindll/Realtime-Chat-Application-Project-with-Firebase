import { use, useState } from "react"
import EmptyImg from '../../assets/emptyimg.jpeg'
import './login.css'
import { toast } from "react-toastify"
const Login = () => {

    const [userImage,setUserImage] = useState({
        file:null,
        url:""
    })

    const [username,setUsername] = useState("")
    const [password,setpassword] = useState("")
    const handleUsername = e =>{
        setUsername(e.target.value)
    }
    const handlePassword = e =>{
        setpassword(e.target.value)
      
    }

    const handlePasswordAndUsername = e => {
          if(password.length<8 && username.length > 8){
            e.preventDefault()
        toast.warn("the password must be > 8 charecaters!")
          }else if (username.length < 8  && password.length>8){
                        e.preventDefault()

        toast.warn("the username must be > 8 charecaters!")
          }else{  
                        e.preventDefault()
 toast.warn("the password & username must be > 8 charecaters!")

          }
    }


    const handleAvatar = e =>{
        if(e.target.files[0])
        setUserImage({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }
    

    const handleLogin= e =>{
        e.preventDefault()
        toast.warn("The lables is Empty!")
        toast.success("The lables is Empty!")

    }

    console.log(username)
  return (
    <div className='Login'>
        <div className="item">
            <h2>Welcome Back,</h2>
            <form onSubmit={handlePasswordAndUsername} >
                <input  onChange={handleUsername} value={username} type="text" placeholder="Email / username / ID .." name="Email" />
                <input  onChange={handlePassword} value={password} type="password" placeholder="password" name="password" />
                <button onSubmit={handlePasswordAndUsername}>LogIn</button>
            </form>
        </div>
        <div className="seprater"></div>
        <div className="item">
               <h2>Create an Account</h2>
            <form onClick={handleLogin} >
                <img className="user-avatar" src={userImage.url || EmptyImg} alt="" />
                <label  htmlFor="file" style={{cursor:"pointer"}}>Uplode an image</label>
                <input onChange={handleAvatar}type="file" id="file" style={{display:"none"}}></input>
                <input type="text" placeholder="username" name="username" />
                <input type="text" placeholder="Email" name="Email" />
                <input on type="password" placeholder="password" name="password" />
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login