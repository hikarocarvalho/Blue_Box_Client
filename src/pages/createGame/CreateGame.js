import React from "react";
import "./CreateGame.css";
import Form from "./../../components/fom/Form";
import Input from "./../../components/input/Input";
import Button from "../../components/button/Button";
export default function CreateGame(){
    return (
        <div className="box">
            <Form classname={"form"}>
                <Input inputType={"text"} inputName={"inputTitle"} inputHold={"Put here the title of the game"}></Input>
                <Input inputType={"text"} inputName={"inputFolder"} inputHold={"Put here the url folder image"}></Input>
                <Input inputType={"text"} inputName={"inputDescription"} inputHold={"Put here the description"}></Input>
                <Input inputType={"text"} inputName={"inputYear"} inputHold={"Put here the year of the game"}></Input>
                <Input inputType={"text"} inputName={"inputTrailer"} inputHold={"Put here the url youtube trailer"}></Input>
                <Input inputType={"text"} inputName={"inputGamePlay"} inputHold={"Put here the url youtube gameplay"}></Input>
                <Input inputType={"text"} inputName={"inputGenre"} inputHold={"Select the genders of the game"}></Input>
                <Button>Register Game</Button>
            </Form>
        </div>
    )
}

// {
//     "title": "monkey",
//     "folder": "teste.jpg",
//     "description": "Jump like a old man with an monkey spirit",
//     "year": 2016,
//     "score": 1,
//     "youtubeUrl": "https://www.youtube.com/",
//     "gamePlayUrl": "https://www.youtube.com/",
//     "genre": 
//     	[
// 		{
// 		    "genreId": 1
// 		}
//         ]
// }