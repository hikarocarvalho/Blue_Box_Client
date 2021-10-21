// This component is used like a content box for all games item inside of the favority or genres box 
import React from "react";
import "./ContentLibrary.css";
export default function ContentLibrary(props){
    return (
        <div className={props.classname}>
            {props.children}
        </div>
    );
}
