import React from "react";
import Header from "./Components/Header"; 
import SearchBar from "./Components/SearchBar"
function App() {
  return (
    <div className="JobPortal">
     <Header></Header>
     <div className="searchbar">
     <SearchBar></SearchBar>
     </div>
    </div>
  );
}

export default App;
