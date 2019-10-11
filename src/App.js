import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
          <div className="container">
          <Navbar/>
          <div className="content">

            <SearchPage />

            <DetailsPage />

          </div>
          </div>
    </div>
  );
}

export default App;
