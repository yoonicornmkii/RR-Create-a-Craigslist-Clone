// Import data
import React from "react";
// Import components
import "./App.css";
import Gallery from "./components/Gallery";
import Directory from "./components/Directory";
import SearchBar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Help from "./components/Help";
import Posting from "./components/Posting";

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Gallery />
        <Directory />
        <SearchBar />
        <Sidebar />
        <Help />
        <Posting />
      </div>
    </div>
  );
}

export default App;
