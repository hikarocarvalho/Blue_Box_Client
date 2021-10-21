// This component create a input default variable 
// input to implement one default visual for all input types and forms 
import React from "react";
import "./Input.css";
export default function Input(props){
    return (
        <input type={props.inputType} name={props.inputName} placeholder={props.inputHold} />
    );
}