import React,{ useEffect,useState } from "react";
import { useParams } from "react-router";
import Form from "../../components/fom/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Api } from "../../Api/Api";
import "./Manager.css";
export default function Manager(){
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
    }, [id])
    console.log(perfil[0]);
    return (
        <div>
            <Form>
                <Input inputType="text" inputName="inputTitle" inputHold={this.value === ""?
                    "Enter with your name Profile"
                    : "Enter with your new name profile"
                }>
                </Input>
                <Input inputType="text" inputName="inputImage" inputHold={this.value === ""?
                    "Enter with the image"
                    : "Enter with the new image"
                }></Input>
                <Button> Register </Button>
            </Form>
        </div>
    );
}