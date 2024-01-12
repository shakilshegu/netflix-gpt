import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store)=> store.user)
 const handleSignOut=()=>{
   signOut(auth).then(()=>{
    navigate("/")
   }).catch(()=>{
     navigate("/error")
   })
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
       <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="logo"/>
       {user && (
        <div className="mt-6">
        <img  className="w-12 h-12 p-2"src="https://occ-0-2164-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7" alt="usericone"/>
        <button onClick={handleSignOut}>Sign Out</button>
       </div>
       )}
      
    </div>
  )
}

export default Header