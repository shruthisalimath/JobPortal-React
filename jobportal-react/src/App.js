import React from "react";
import Header from "./Components/Header"; 
import SearchBar from "./Components/SearchBar";
import NewjobPosting from "./Components/Job-Posting/NewJobposting";
function App() {
  return (
    <div className="JobPortal">
     <Header />
     <NewjobPosting />

     <div className="searchbar">
     <SearchBar />
     </div>

    </div>
  );
}

export default App;
