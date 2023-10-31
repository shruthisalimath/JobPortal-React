import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header"; 
import SearchBar from "./Components/SearchBar";
// import NewJobPosting from "./Components/Job-Posting/NewJobPosting";
import JobList from "./Components/Job-Posting/JobList";

function App() {
  return (
    <div className="JobPortal">
     <Header />
     {/* <NewjobPosting /> */}

     <div className="searchbar">
     <SearchBar />
     </div>

     <div className="JobList">
      <JobList />
     </div>
     {/* <NewJobPosting /> */}
    </div>
  );
}

export default App;
