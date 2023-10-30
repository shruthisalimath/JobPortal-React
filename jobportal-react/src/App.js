import React from "react";
import Header from "./Components/Header"; 
import SearchBar from "./Components/SearchBar";
import NewjobPosting from "./Components/Job-Posting/NewJobposting";
import JobCard from "./Components/Job-Posting/JobCard";

function App() {
  return (
    <div className="JobPortal">
     <Header />
     <NewjobPosting />

     <div className="searchbar">
     <SearchBar />
     </div>

     <div className="JobList">
      <JobCard />
     </div>

    </div>
  );
}

export default App;
