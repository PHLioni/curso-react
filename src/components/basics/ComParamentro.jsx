import React from "react";

export default function ComParametro(props){
    return(
        <div>
            <h1>{props.titulo}</h1>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {props.nota}</strong>
            </p>           
        </div>
    )
}