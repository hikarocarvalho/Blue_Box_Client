// This is the component to create a box call to any item on game list from store or library
import React from "react";
import "./ItemGame.css";
import ImageContainer from "../imagecontainer/ImageContainer";
import Label from "../label/Label";
import { Link } from 'react-router-dom';
import Star from './../star/Star';

export default function ItemGame(props){
    const starUnitys = [1,2,3,4,5];
    // jsx item implementation 
    const stars = ((index)=>{
        let star;
        for(let countStars =0; countStars < props.gameScore; countStars++){
            if(props.gameScore-1 >= index){
                return <Star key={index} classname={"star-outside-full"}></Star>;
            }
            else{
                return <Star key={index} classname={"star-outside-clean"}></Star>;
            }
        }
        return star;
    })
    return (
       
        <Link to={"/description/"+props.id} className="link">
            <ImageContainer classname={"item"} classimage={"preview"} image={props.image}>
                <Label classname="description" text={props.gameName+" \n "+props.gameYear} />
            </ImageContainer>
            <div className="star-content-hover">
                {starUnitys.map((unity,index)=>stars(index))}
            </div>
        </Link>
        
    );
}
