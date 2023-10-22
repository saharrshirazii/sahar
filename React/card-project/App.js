import React from "react";
import Navbar from "./Navbar.js"
import MainContent from "./MainContent"
import Card from "./Card.js"

export default function(){
  return(
    <div>
      <Navbar />
      <MainContent />
      <div className="card-component">
      <Card
          img = "katie-zaferes.png"
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life lessons with Katie Zaferes"
          price = {136}/>
      <Card
          img = "katie-zaferes.png"
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life lessons with Katie Zaferes"
          price = {136}/>
      <Card
          img = "katie-zaferes.png"
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life lessons with Katie Zaferes"
          price = {136}/>
      <Card
          img = "katie-zaferes.png"
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life lessons with Katie Zaferes"
          price = {136}/>
      </div>
    </div>
  )
}





