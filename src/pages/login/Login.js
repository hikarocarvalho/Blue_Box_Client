// This code is from login page
import React,{ useState } from "react";
import Logo from "./../../logo.png";
import "./Login.css";
import Form from "../../components/fom/Form";
import Input from "../../components/input/Input";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import Button from "../../components/button/Button";
import { Api } from "../../Api/Api";
import Message from "../../components/message/Message";
export default function Login(props){
    const [message,setMessage] = useState({
        text:"",
        level:"",
        style:{transform: "translateY(-100px)",}
    });
    const verifyLogin = async (event)=>{
        event.preventDefault();
        const login = {
            "email":event.target.input_user.value,
            "password":event.target.input_pass.value
        };
        const response = await Api.buildApiPostRequest(
            Api.LoginVerifyUrl(),
            login
        );
        const body = await response.json();
        // create a message variable
        const messageView = {
            text:"",
            level:"",
            style:{}
        };
        
        switch (response.status){
            case 200:
                messageView.text = "user loged with sucess!!! ";
                messageView.level = "ok";
                const accessToken = body.accessToken;
                localStorage.setItem("JWT", accessToken);
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
        props.history.push('/');
    };
    return (
        <section className="box">
            <Form submit={verifyLogin} classname={"form"}>
                <ImageContainer image={Logo} description={""} classname={""} classimage={"logo"}></ImageContainer>
                <Input inputType='text' inputName="input_user" inputHold="Enter with your user name"></Input>
                <Input inputType='password' inputName="input_pass" inputHold="Enter with your password"></Input>
                <Button> Login </Button>
            </Form>
            <Message level={message.level} messageText={message.text} style={message.style}>

            </Message>
        </section>
    );
}