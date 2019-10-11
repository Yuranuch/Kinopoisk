import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
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
