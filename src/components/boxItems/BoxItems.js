// not used yet
import React from "react";
import "./BoxItems.css";
export default function BoxItems(props){
    return (
        <div className={props.classname}>
            {props.children}
        </div>
    );
}
