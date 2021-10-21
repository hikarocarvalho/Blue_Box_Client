// This page is used for represent the no existent routes 
import "./NotFound.css";
import notFound from "./pageerror.png";
import React from "react";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
export default function NotFound(){
    return (
        <section className="box __notfound">
            <ImageContainer image={notFound} classname={"notFoundContainer"} classimage={"notFoundImage"} />
        </section>
    );
}