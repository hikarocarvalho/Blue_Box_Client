// This component Genre create a box for genre by genre of games
import React from "react";
import "./ContentGenre.css";
import BoxItems from "../../components/boxItems/BoxItems";
import Label from "../../components/label/Label";
import ItemGame from "../ItemGame/ItemGame";
export default function ContentGenre(props){
    //start of jsx Content genre implementation 

    return (
        <div className={props.classname}>
            <Label classname={"genre"} text={props.genre} />
            <BoxItems classname="items">
                {props.games.map((game)=>(
                    game.genre.map((genreItem)=>{
                    if (genreItem.genre.name === props.genre){
                    return (<ItemGame key={game.id} id={game.id} image={game.folder} gameName={game.title} gameYear={game.year} gameScore={game.score} />);
                
                }else{
                    return "";
                }})))}
            </BoxItems>
        </div>
    );
}
