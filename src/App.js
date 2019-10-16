import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import "./App.css"
import DetailsPage from "./Components/DetailsPage/DetailsPage"
import SearchPage from "./Components/SearchPage/SearchPage"

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="content">
                    <Route exact path="/" component={SearchPage}/>
                    <Route path="/detail/:filmId?" component={DetailsPage}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
