import React from "react";
import Navbar from "./Navbar.js"
import MainContent from "./MainContent"
import Card from "./Card.js"
import Contact from "./Contact.js"



/*export default function App (){
  return(
    <div>
        <Navbar /> 
        <MainContent/>
        <Card/>
    </div>
  )
}*/

export default function App (){
  return(
    <div className="contact">
        <Contact
        img = "./images/personel1.jpg"
        name = "Mrs. Eva Ericsson"
        phone = "(222) 555-123"
        email = "eva.gmail.com"
        />

        <Contact
        img = "./images/personel2.jpg"
        name = "Mr. Adam gron"
        phone = "(222) 432-123"
        email = "Adam.gmail.com"
        />

        <Contact
        img = "./images/personel3.jpg"
        name = "Mrs. Anna berg"
        phone = "(222) 836-123"
        email = "anna.gmail.com"
        />

        <Contact
        img = "./images/personel1.jpg"
        name = "Mrs. Eva Ericsson"
        phone = "(222) 555-123"
        email = "eva.gmail.com"
        />
    </div>
  )
}



