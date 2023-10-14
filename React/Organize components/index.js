import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import MainContent from "./MainContent.js"
import Footer from "./Footer.js"
import './index.css';  

function App(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>    
        </div>
    )
}

ReactDOM.render(<App/> , document.getElementById("root"))

