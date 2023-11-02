import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"
import Hero from "./Hero"


export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
