import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const JobList = () => {
  const [jobs, setJobs] = useState([]);

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


  return (
    <div>
      <h1>Job Listing</h1>
      <Card style={{ width: '25rem' }}>
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
            <Button variant="primary" type="submit" >Edit</Button>
            <Button variant="primary" type="submit">Delete</Button>
            
          </Card.Body>
        ))}
      </Card>
    </div>
  );
}

export default JobList;
