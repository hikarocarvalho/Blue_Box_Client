// this component is used to create a default button for any form in this system
import React from "react";
import "./Button.css";
export default function Button(props){
    return (
        <button type="submit">{props.children}</button>
    );
}