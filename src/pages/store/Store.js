// this is the page store code and the implamentation of all components from store page
import React,{useState,useEffect} from "react";
import BoxLibrary from "../../components/boxLibrary/BoxLibrary";
import ContentLibrary from "../../components/contentLibrary/Contentlibrary";
import Label from "../../components/label/Label";
import ContentGenre from "../../components/contentGenre/ContentGenre";
import { Api } from "../../Api/Api";
import "./Store.css";
import ItemGame from "../../components/ItemGame/ItemGame";
import { Link } from "react-router-dom";
export default function Store(){
    // Create one variable to implements useState
    const [games,setGames] = useState([]);
    const [genres,setGenres] = useState([]);
    // Create the implementation for useEffect hoock to call the values from web server api
    const loadGenres = async ()=>{
        const response = await Api.buildApiGetRequest(Api.readAllGenreUrl());
        const res = await response.json();
        setGenres(res);
    }
    const loadGames = async () =>{
        const response = await Api.buildApiGetRequest(Api.readAllGamesUrl());
        const res = await response.json();
        setGames(res);
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
                    {games.map((game)=>
                    ((game.score!==0 ? (<ItemGame key={game.id} id={game.id} image={game.folder} gameName={game.title} gameYear={game.year} gameScore={game.score}/> ) : ("")))
                    )}
                </ContentLibrary>
            </BoxLibrary>
            <BoxLibrary classname={"items-library"}>
                <Link className="newGame" to={"/creategame"}>
                    Register A New Game
                </Link>
                <Label text={"User Games Library"} />
                <ContentLibrary classname={"content-ext"}>
                {/* start maping the games genders list */}
                        {genres.map((genre,index)=>{
                            return(<ContentGenre key={genre.id} classname={"content"} games={games} genre={genre.name}/>)
                        })}
                </ContentLibrary>
            </BoxLibrary>
        </section>
    );
}