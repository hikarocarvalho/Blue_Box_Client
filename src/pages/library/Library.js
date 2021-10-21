// this is the page store code and the implamentation of all components from store page
import React,{useState,useEffect} from "react";
import BoxLibrary from "../../components/boxLibrary/BoxLibrary";
import ContentLibrary from "../../components/contentLibrary/Contentlibrary";
import Label from "../../components/label/Label";
import ContentGenre from "../../components/contentGenre/ContentGenre";
import { Api } from "../../Api/Api";
import "./Library.css";
import ItemGame from "../../components/ItemGame/ItemGame";
export default function Library(){
    // Create one variable to implements useState
    const [userGames,setUserGames] = useState([]);
    const [genres,setGenres] = useState([]);
    // Create the implementation for useEffect hoock to call the values from web server api
    const loadGenres = async ()=>{
        const response = await Api.buildApiGetRequest(Api.readAllGenreUrl());
        const res = await response.json();
        setGenres(res);
    }
    const loadGames = async () =>{
        const response = await Api.buildApiGetRequest(Api.readAllGamesListUrl());
        const res = await response.json();
        const arrayGames = [];
        res.map((game)=>arrayGames.push(game.game));
        setUserGames(arrayGames);
    }
    useEffect(()=>{
        loadGames();
        loadGenres();
    },[]);
    // finish useEffect implements
    // Start the implementation of the jsx from store page
    return (
        <section className="box-library">
            <BoxLibrary classname={"favority-library"}>
                <Label text={"User Favority Games"} />
                <ContentLibrary classname={"content"}>
                    {/* start maping the games favirity list */}
                    {userGames.map((game)=>
                    ((game.score!==0 ? (<ItemGame key={game.id} image={game.folder} gameName={game.title} gameScore={game.score} gameYear={game.year} /> ) : ("")))
                    )}
                </ContentLibrary>
            </BoxLibrary>
            <BoxLibrary classname={"items-library"}>
                <Label text={"User Games Library"} />
                <ContentLibrary classname={"content-ext"}>
                {/* start maping the games genders list */}
                        {genres.map((genre,index)=>(
                            <ContentGenre key={genre.id} classname={"content"} games={userGames} genre={genre.name}/>
                        ))}
                </ContentLibrary>
            </BoxLibrary>
        </section>
    );
}