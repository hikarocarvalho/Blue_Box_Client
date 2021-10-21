// This component create a default label structure 
import React from "react";
import "./Star.css";
export default function Label(props){
    return (
        <div className="star">
            <div className={props.classname}>
                <div className="one">
                </div>
                <div className="two">
                </div>
                <div className="three">
                </div>
            </div>
        </div>
    );
}
