// This component create a default form structure to this system
import React from "react";
import "./Form.css";

export default function Form(props){
    return (
        <form onSubmit={props.submit} className={props.classname}>
            {props.children}
        </form>
    );
}