import React from "react";

export default function Joke(props){
    return(
        <div>
        <h3>{props.Setup}</h3>
        <p>{props.Punchline}</p>
        <hr/>

    </div>
    )
}
