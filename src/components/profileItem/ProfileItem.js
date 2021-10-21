//This component create a image component and add one defalt image for an not image case
import React from "react";
import {Link} from 'react-router-dom';
import "./ProfileItem.css";
export default function ProfileItem(props){
    return (
        <div className={"profiles-item-"+props.index} style={props.style}>
                { props.account !== undefined? props.account.title : null }
                <div className="options">
                    <Link to={ "/manager/"+( props.account !== undefined? props.account.id : " ")} >manage</Link>
                    {(props.account !== undefined? <Link to={"/library/"+props.account.title}>select</Link> : "")}
                </div>
        </div>
    );
}