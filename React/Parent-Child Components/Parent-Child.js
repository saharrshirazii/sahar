import React from "react"
import ReactDOM from "react-dom"

function Header (){
    return(
        <header>
                <nav>
                    <img src="./logo192.png" width="40px"/>
                </nav>
        </header>
    ) 
}


function MainContent(){
    return(
        <div>
            <h1>Reason I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job s a developer if I know React</li>
            </ol>
        </div>
    )
}


function Footer(){
    return(
        <footer>
                @2023 Sahar developer. All rights reserved.
         </footer>
    )
}
   

function TemporaryName(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>    
        </div>
    )
}


ReactDOM.render(<TemporaryName/> , document.getElementById("root"))

