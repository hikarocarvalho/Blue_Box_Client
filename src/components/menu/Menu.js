import React,{useState, useEffect} from "react";
import "./Menu.css";
import GuardedLinks from "../GuardedLinks/GuardedLinks";
export default function Menu(){
    const [state,setState] = useState(false);
    useEffect(()=>{
        setState(Boolean(localStorage.getItem("JWT")));
    },[state]);
   
    return(
        <nav className='menu'>
          <GuardedLinks to="/">Store</GuardedLinks>        
          <GuardedLinks to="/register">Register</GuardedLinks>
          <GuardedLinks to="/perfil">Profiles</GuardedLinks>
          <GuardedLinks to="/manager">Manager</GuardedLinks>
          <GuardedLinks to="/library">Library</GuardedLinks>
          <GuardedLinks to="/login">Login</GuardedLinks>
          <GuardedLinks to="/logout">Logout</GuardedLinks>
        </nav>
    );
}