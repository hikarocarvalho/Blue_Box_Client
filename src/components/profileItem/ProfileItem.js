//This component create a image component and add one defalt image for an not image case
import React from "react";
import "./ProfileItem.css";
export default function ProfileItem(props){
    return (
        <div className={"profiles-item-"+props.index} style={props.style}>
                <div className="options">
                    <label>manage</label>
                    <label>select</label>
                </div>
        </div>
    );
}