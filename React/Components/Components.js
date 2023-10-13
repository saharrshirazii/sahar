import React from "react"
import ReactDOM from "react-dom"

function TemporaryName(){
    return(
        <div>
    <img src="./logo192.png" width="40px"/>
    <h1>Fun Facts about React</h1>
    <ul>
        <li>was first released in 2013</li>
        <li>was orginally created by Jordan Walke</li>
        <li>has well over 100k stars on GitHub</li>
        <li>is maintained by facebook</li>
        <li>powers thousands of entereprise apps, including mobile apps</li>

    </ul>
</div>
    )
}
   

ReactDOM.render(<TemporaryName/> , document.getElementById("root"))

