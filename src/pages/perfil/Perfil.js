// this code represent the perfil chose list page
import React,{useState,useEffect} from "react";
import ProfileItem from "../../components/profileItem/ProfileItem";
import "./Perfil.css";
export default function Perfil(){
    const[acounts,setAcounts] = useState([]);
    
    useEffect(()=>{
        const acount = [
            {
                transform:"translate3d(-100px, 0px, 100px)",
                height:"70%",
                zIndex:1
            },{
                transform:"translate3d(-50px, 0px, 50px)",
                height:"80%",
                zIndex:2
            },{
                transform:"translate3d(0px, 0px, 0px)",
                height:"90%",
                zIndex:3
            },{
                transform:"translate3d(50px, 0px, 50px)",
                height:"80%",
                zIndex:2
            },{
                transform:"translate3d(100px, 0px, 100px)",
                height:"70%",
                zIndex:1
            }
        ];
    setAcounts(acount);
    },[]) 
    const prevPerfil=(event)=>{
        event.preventDefault();
        const acount = [];
        for(let count = 1; count<5; count++){
            acount.push(acounts[count]);
        }
        acount.push(acounts[0]);
        setAcounts(acount);
    }
    const nextPerfil=(event)=>{
        event.preventDefault();
        const acount = [];
        acount.push(acounts[4]);
        for(let count = 0; count<4; count++){
            acount.push(acounts[count]);
        }
        setAcounts(acount);
        
    }
    return (
        <div className="perfil" >
        <div className="profiles">
        <div className="profiles-container">
            {acounts.map((acount,index)=>(
                <ProfileItem index={index+1} style={acount} key={index+1}></ProfileItem>
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