import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import EditJobPosting from './EditJobPostng';


const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const [showEditJob, setShowEditJob ] = useState (false);
  const [jobToEdit, setJobToEdit ] = useState(null);//store jobId to edit

  const handleEdit = (jobId) => {
    console.log("Edit button clicked");
    setJobToEdit(jobId);//set job Id to edit
    setShowEditJob(true);
};

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios.get('http://localhost:5001/jobs')
    .then((res) => {
      console.log('successfull response:', res);
      setJobs(res.data);
    })
    .catch((error) => {
      console.error('Error fetching job list', error);
    });
  };

  const handleDelete = (jobId) =>{
    //make an API request to delete the job on server
    axios.delete(`http://localhost:5001/jobs/${jobId}`)
    .then((res) => {
      console.log("Job deleted successfully!!", res);
      //update local state to remove the deleted job
      setJobs(jobs.filter(job => job.id !== jobId));
    })
    .catch ((error) => {
      console.error("Error deleting job!!", error);
    });
  }

  return (
    <div className='JobList'>
      <h1 className='list-title'>Job Listing</h1>
      <Card className='list'>
        {jobs.map((job) => (
          <Card.Body key={job.id}>
            <Card.Title>Job Title:{job.title} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Company Name:{job.companyname}</Card.Subtitle>
            <Card.Text>
              Description: {job.description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Job-Type: {job.type} </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">JOb-Location: {job.location} </Card.Subtitle>
            <Card.Text>
              Skills:{job.skills}
            </Card.Text>
            <Button variant="primary" type="submit" onClick= {() => handleEdit(job.id)}>Edit</Button>
            <Button variant="primary" type="submit" onClick={() => handleDelete(job.id)}>Delete</Button>
            
          </Card.Body>
        ))}
      </Card>
      {showEditJob && <EditJobPosting  jobId={jobToEdit}/>}
    </div>
  );
}

export default JobList;
