import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

class App extends Component {
    state = {
        redirect: true
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/search' />
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    {this.renderRedirect()}
                    <Navbar/>
                        <div className="content">
                            <Route path='/search' component={SearchPage}/>
                            <Route path='/detail/:filmId?' component={DetailsPage}/>
                        </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
