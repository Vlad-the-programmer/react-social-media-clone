import React, { ReactNode, useState } from "react";
type CardProps = {
    children: ReactNode,
    buttonLink: string,
    imageLink: string,
    buttonText: string,
    title: string,
}
function Card(props: CardProps){
    function changeBackGround(){
        
        if(cardbackground === "bg-white"){
            setcardbackground("bg-secondary")
        }
        else{
            setcardbackground("bg-white")
        }
    }
    const [cardbackground, setcardbackground] = useState("bg-white")
    return (
        <div className = {`${cardbackground} card`}>
            <img src={props.imageLink} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {props.children}
                <a  
                    href={props.buttonLink} 
                    onClick={changeBackGround} 
                    className="btn btn-primary"
                >{props.buttonText}
                </a>
            </div>
        </div>
    )
}
export default Card