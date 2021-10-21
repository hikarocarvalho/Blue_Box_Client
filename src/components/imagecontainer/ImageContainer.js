//This component create a image component and add one defalt image for an not image case
import React from "react";
import "./ImageContainer.css";
import NotImage from "./imagenot.png";
export default function ImageContainer(props){
    const imageNotFound = (event) =>{
        event.target.attributes.src.value = NotImage;
    }
    return (
        <picture className={props.classname} >
            
            <img src={props.image} alt={props.description} onError={ imageNotFound } className={props.classimage} />
            {props.children}
        </picture>
    );
}