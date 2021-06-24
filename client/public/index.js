import React from "react"
import ReactDOM from "react-dom"
import "./index.html"
import "./styles.css"
import App from "./app_effect.js"



class Welcome extends React.Component
{
    render()
    {
        return <h1>Hello World from React Boilerplate!</h1>
    }
}


ReactDOM.render(<Welcome />,document.getElementById("root"));
ReactDOM.render(<App />,document.getElementById("slides"));
