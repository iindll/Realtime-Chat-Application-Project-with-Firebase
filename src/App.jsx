import Noticfication from "./componets/notfication/Noticfication.jsx"
import Lists from "./componets/lists/lists.jsx"
import Details from "./componets/Detail/Details.jsx"
import Chats from "./componets/Chats/Chats.jsx"
import Login from "./componets/login/login.jsx"
const App = () => {
  const user =true
  return(
<div className="container">

  {
    user ?(
  <>
  <Lists></Lists>
  <Chats></Chats>
  <Details></Details>
  </>
    ) : (<Login/>)
  }

  <Noticfication/>

</div>
)
}

export default App