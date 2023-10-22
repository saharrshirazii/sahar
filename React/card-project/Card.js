import React from "react"
import './style.css';


export default function Card (props){
    return (
        <div className="Card">
            <img src={`./images/${props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) &#8226;</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}
