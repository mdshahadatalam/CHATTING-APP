import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom";
import { Loging } from "../Pages/Loging";

export default function LoggedInUserRoute(){
    const user = useSelector((user)=> user.login.logged);
    return user ? <Outlet/> : <Loging/>;
}