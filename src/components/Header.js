import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USERICONE } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  const handleSignOut=()=>{
   signOut(auth).then(()=>{
   }).catch(()=>{
   })
  }
  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // Unsiubscribe when componenr Unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
       <img className="w-44" src={LOGO}
       alt="logo"/>
       {user && (
        <div className="mt-6">
        <img  className="w-12 h-12 p-2"src={USERICONE} alt="usericone"/>
        <button onClick={handleSignOut}>Sign Out</button>
       </div>
       )}
      
    </div>
  )
}

export default Header