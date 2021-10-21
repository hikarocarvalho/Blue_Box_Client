import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
export default function GuardedLinks(props){
    const [state, setState] = useState("");
  
    useEffect(() => {
        const auth = Boolean(localStorage.getItem("JWT"));
        setState(auth);
    }, [state]);
    return( 
        state === true ? (
            props.children === 'Login' || props.children === 'Register'? null :
            <Link to={props.to}>{props.children}</Link>
        
        ) : (
            props.children === 'Login' || props.children ==='Register' ?
            <Link to={props.to}>{props.children}</Link> : null
        )
     );
}