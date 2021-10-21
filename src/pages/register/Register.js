// this is the register page, where you make the new account register
import React,{ useState } from "react";
import "./Register.css";
import Logo from "./../../logo.png";
import Form from "../../components/fom/Form";
import Input from "../../components/input/Input";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import Button from "../../components/button/Button";
import { Api } from "../../Api/Api";
import Message from "../../components/message/Message";
export default function Register(props){
    const [message,setMessage] = useState({
        text:"",
        level:"",
        style:{transform: "translateY(-100px)",}
    });
    // create function
    const create = async (event)=>{
        event.preventDefault();
        const userName = event.target.inputName.value;
        const userLastName = event.target.inputLastName.value;
        const userCpf = event.target.inputCpf.value;
        const userEmail = event.target.inputEmail.value;
        const userPass = event.target.inputPass.value;
        // create a message variable
        const messageView = {
            text:"",
            level:"",
            style:{}
        };
        //create a PayLoad model
        const payLoad = {
            name: userName,
            lastName: userLastName,
            email: userEmail,
            password: userPass,
            CPF: userCpf,
            Perfil:{
                title: userName,
            }
        }
        // make an request for the back and
        const response = await Api.buildApiPostRequest(
            Api.createUserUrl(),
            payLoad
        )
        switch (response.status){
            case 201:
                messageView.text = response.statusText;
                messageView.level = "ok";
                break;
            case 204:
                messageView.text = response.statusText;
                messageView.level = "alert";
                break;
            default:
                messageView.text = response.statusText;
                messageView.level = "danger";
                break;
        }
        messageView.style = {
           transform:"translateY(0px)",
        }
        setMessage(messageView);
    }
    if(JSON.stringify(message.style)!==JSON.stringify({transform: "translateY(-100px)",})){
        console.log("teste")
        setTimeout(()=>(
            setMessage({
                text:"",
                level:"",
                style:{transform: "translateY(-100px)",}
            })
        ), 3000);
    }
    return (
        <section className="box">
            <Form submit={create} classname={"form"}>
                    <ImageContainer image={Logo} description={""} classname={""} classimage={"logo"}></ImageContainer>
                    <Input inputType="text" inputName="inputName" inputHold="Enter with the new user name"></Input>
                    <Input inputType="text" inputName="inputLastName" inputHold="Enter with your last name"></Input>
                    <Input inputType="text" inputName="inputCpf" inputHold="Enter with your Cpf"></Input>
                    <Input inputType="text" inputName="inputEmail" inputHold="Enter with your Email"></Input>
                    <Input inputType="text" inputName="inputPass" inputHold="Enter with your Password"></Input>
                    <Input inputType="text" inputName="inputPassAgain" inputHold="Confirm your Password"></Input>
                    <Button> Register </Button>
            </Form>
            <Message level={message.level} messageText={message.text} style={message.style}>

            </Message>
        </section>
    );
}