import React from "react"

export default function Card(props) {
   
        
    return (
        
        <div className="card">
            <img src={props.imageUrl} className="card--image" />
            <div className="card--stats">
                <img src="../images/map.png" className="card--map" />
                <span className="card--location">{props.location}</span>
                <span className="card--googleMap"><a href="`${props.googleMapsUrl}`">View on Google Maps</a></span>
                <h3 className="card--tittle">{props.title}</h3>
                <span className="card--date">{props.startDate} - </span>
                <span className="card--date">{props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
            
        </div>
    )
}
