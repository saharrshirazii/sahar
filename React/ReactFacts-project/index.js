import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import MainContent from "./MainContent.js"
import Footer from "./Footer.js"
import App from "./App.js"

/*function App(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>    
        </div>
    )
}*/

function Page(){
    return(
        <div>
            <App/>
             
        </div>
    )
}

ReactDOM.render(<Page/> , document.getElementById("root"))

