import React from "react";
import Header from "./Components/Header"; 
import SearchBar from "./Components/SearchBar";
import NewjobPosting from "./Components/Job-Posting/NewJobposting";
import JobList from "./Components/Job-Posting/JobList";

function App() {
  return (
    <div className="JobPortal">
     <Header />
     <NewjobPosting />

     <div className="searchbar">
     <SearchBar />
     </div>

     <div className="JobList">
      <JobList />
     </div>

    </div>
  );
}

export default App;
