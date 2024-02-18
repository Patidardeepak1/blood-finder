
import {useSelector} from "react-redux"
import { Navigate, Outlet } from "react-router-dom"



function Privateroute() {
 const { currentUser} = useSelector((state) => state.user);
  return currentUser ? <Outlet/>:<Navigate to="/sign-in"/> 
}

export default Privateroute;
