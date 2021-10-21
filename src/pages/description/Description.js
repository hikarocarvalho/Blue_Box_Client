// This code represent the page for description or preview of any game selected in store or library
import React,{useState,useEffect} from "react";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import "./Description.css";
import Star from "../../components/star/Star";
import { Api } from "../../Api/Api";
import { useParams } from "react-router-dom";
export default function Description(){
    const stars = ["","","","",""];
    const gameDefault = {
            id: 0,
            title: "",
            folder: "",
            description: "",
            year: 0,
            score: 0,
            youtubeUrl: "",
            gamePlayUrl: "",
            genre: 
                [
                    {
                        genre: 
                            {
                                id: 0,
                                name: ""
                            }
                    },
                ]
    }
    const [ game, setGame ] = useState(gameDefault);
    let { id } = useParams();
    useEffect(() => {
        const loadGame = async () =>{
            const response = await Api.buildApiGetRequest(Api.readOneGameUrl(id));
            const res = await response.json();
            setGame(res);
        };
       loadGame();
    }, [id]);
    const createStars = (index)=>{
        if(game.score-1 >= index){
            return <Star key={index} classname={"star-outside-full"}></Star>;
        }
        else{
            return <Star key={index} classname={"star-outside-clean"}></Star>;
        }
    }
    
    return (
        <section className="description-box">
            <ImageContainer classname={"description-item"} image={game.folder} description={""} classimage={"preview"}>

            </ImageContainer>
            
            <div className="description-text">
                <p>{game.title}</p>
                <p>( {game.genre.map((genres)=>(
                    genres.genre.name+ " / "
                ))}
                )</p>
                <p>{game.description}</p>
                <div className="stars">
                    {stars.map((currentStar,index)=>(
                        createStars(index)
                    ))}
                </div>
            </div>
        </section>
    );
}