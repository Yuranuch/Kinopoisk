import React, {Component} from "react"
import {BrowserRouter, Redirect, Route} from "react-router-dom"
import "./App.css"
import DetailsPage from "./Components/DetailsPage/DetailsPage"
import SearchPage from "./Components/SearchPage/SearchPage"

class App extends Component {
    state = {
        redirect: true
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/search" />
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    {this.renderRedirect()}
                        <div className="content">
                            <Route path="/search" component={SearchPage}/>
                            <Route path="/detail/:filmId?" component={DetailsPage}/>
                        </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
