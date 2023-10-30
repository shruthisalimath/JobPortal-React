import React  from 'react';
import Card from 'react-bootstrap/Card';
//import Accordion from 'react-bootstrap/Accordion';


const JobCard = () => {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>Job Title: </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Company Name:</Card.Subtitle>
        <Card.Text>
          Description: 
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Location </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Duration </Card.Subtitle>
        <Card.Text>
          Skills:
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default JobCard;