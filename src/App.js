import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <div className="wrapper">
              {/*<Header/>*/}
              <div className="container">
                  <Navbar/>
                  <div className="content">

                      <Route path='/search' component={SearchPage}/>
                      <Route path='/detail' component={DetailsPage}/>


                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
