import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <h1>My Website</h1>
        <h3>I love React</h3>
        <ol>
            <li>Pricing</li>
            <li>About</li>
            <li>contact</li>

        </ol>
    </div>
)

//stringfy: document.getElementById("root").append(JSON.stringfy(page))

ReactDOM.render(page, document.getElementById("root"))

