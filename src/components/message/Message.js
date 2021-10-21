import React from "react";
import "./Message.css";
export default function Message(props){
    return (
        <div className={ "messageBox "+ props.level } style={ props.style }>
            { props.messageText }
        </div>
    );
}