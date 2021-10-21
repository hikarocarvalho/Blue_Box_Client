// this code represent the perfil chose list page
import React,{useState,useEffect} from "react";
import ProfileItem from "../../components/profileItem/ProfileItem";
import "./Perfil.css";
import { Api } from "../../Api/Api";
export default function Perfil(){
    const[acountsPositions,setAcountsPositions] = useState([]);
    const[account,SetAccount] = useState([]);
    
    useEffect(()=>{
        const acountPositions = [
            {
                transform:"translate3d(0px, 0px, 0px)",
                height:"90%",
                zIndex:3
                
            },{
                transform:"translate3d(-50px, 0px, 50px)",
                height:"80%",
                zIndex:2
            },{
                transform:"translate3d(-100px, 0px, 100px)",
                height:"70%",
                zIndex:1
                
            },{
                transform:"translate3d(100px, 0px, 100px)",
                height:"70%",
                zIndex:1
               
            },{
                
                transform:"translate3d(50px, 0px, 50px)",
                height:"80%",
                zIndex:2
            }
        ];
    const getPerfil = async() =>{
        const response = await Api.buildApiGetRequest(Api.readAllPerfilUrl());
        const res = await response.json();
        SetAccount(res);
    };
    getPerfil();
    setAcountsPositions(acountPositions);
    },[]) 
    const prevPerfil=(event)=>{
        event.preventDefault();
        const acount = [];
        for(let count = 1; count<5; count++){
            acount.push(acountsPositions[count]);
        }
        acount.push(acountsPositions[0]);
        setAcountsPositions(acount);
    }
    const nextPerfil=(event)=>{
        event.preventDefault();
        const acount = [];
        acount.push(acountsPositions[4]);
        for(let count = 0; count<4; count++){
            acount.push(acountsPositions[count]);
        }
        setAcountsPositions(acount);
        
    }
    return (
        <div className="perfil" >
            <div className="profiles">
                <div className="profiles-container">
                    {acountsPositions.map((position,index)=>(
                        <ProfileItem account={account[index]} index={index+1} style={position} key={index+1}></ProfileItem>
                    ))}
                </div>
                <div className="profiles-controls" >
                    <button id="controls-prev" onClick={prevPerfil} >{"<"}</button>
                    <button id="controls-next" onClick={nextPerfil}>{">"}</button>
                </div>
            </div>
        </div>
    );
}