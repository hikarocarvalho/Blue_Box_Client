import React,{ useEffect,useState } from "react";
import { useParams } from "react-router";
import Form from "../../components/fom/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Api } from "../../Api/Api";
import "./Manager.css";
export default function Manager(props){
    const [perfil,setPerfil] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        if(id!==undefined){
            const getPerfil = async() =>{
                const response = await Api.buildApiGetRequest(Api.readOnePerfilUrl(id));
                const res = await response.json();
                console.log(res)
                setPerfil(res);
            };
            getPerfil();
            
        }
    }, [id]);
    const verifyAndReturn = (event)=>{
        event.preventDefault();
        const payLoad ={
            title: event.target.inputTitle,
            image: event.target.inputeImage,
            userId: perfil.userId
        }
        return payLoad;
    };
    const create = async(event)=>{
        const payLoad = verifyAndReturn(event);
        event.preventDefault();
        const response = await Api.buildApiPostRequest(
            Api.createPerfilUrl(),
            payLoad
    )
        if( response.ok ){
            console.log("ok");
        }else{
            console.log("not ok");
        }
    };
    const update = async(event)=>{
        event.preventDefault();
        const payLoad = verifyAndReturn(event);
        const response = await Api.buildApiPatchRequest(
            Api.updatePerfilUrl(id),
            payLoad
        )
        if( response.ok ){
            console.log(response.status)
            console.log("ok");
        }else{
            console.log("not ok");
        }
    };
    
  
    return (
        <div className="manager">
            <Form submit={ perfil.id ? update: create }  classname={"form"}>
                <Input inputType="text" inputName="inputTitle" inputHold={perfil.title} >
                </Input>
                <Input inputType="text" inputName="inputImage" inputHold={perfil.image} ></Input>
                <Button> { perfil.id ? "Save": "Register" } </Button>
            </Form>
        </div>
    );
}