import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditJobPosting = ({ jobId }) => {
    const [show, setShow] = useState(true);

    const [editJob, setEditJob] = useState({
        title: '',
        type: 'Full-time',
        companyname: '',
        location: 'on-site',
        description: '',
        skills: ''
    });

    const jobTypes = ['full-time', 'part-time', 'contract'];
    const jobLocation = ['on-site', 'remote', 'hybrid'];

    useEffect(() => {
        //fetch the job data using jobId and update the edit job state
        axios.get(`http://localhost:5001/jobs/${jobId}`)
            .then((res) => {
                //set the edited job state with fteched data
                setEditJob(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data for Editing!!", error);
            });
    }, [jobId]);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditJob((prevJob) => ({
            ...prevJob,
            [name]: value,
        }));
        // setShow(true);
    };

    const handleClose = () => setShow(false);

    const updateJobPosting = (jobId) => {
        //e.preventDefault();//prevent default form submission
        console.log("Edied Job Data to be Submitted:", editJob);
        console.log("PUT URL:", `http://localhost:5001/jobs/${jobId}`);
        console.log("PUT Data:", editJob);
        axios.put(`http://localhost:5001/jobs/${jobId}`, editJob)
            .then((res) => {
                //handle success
                console.log("Edited Job!! put response", res);

                handleClose(); //close the modal after successful job posting
                //setEditJob(editJob.filter(job => job.id !== jobId));
                window.location.reload();
            })
            .catch((error) => {
                //handle errors
                console.log('Error Editing Job!!', error);
            });
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Job</Modal.Title>
                </Modal.Header>

                <Modal.Body >

                    <Form>
                        <Row className='mb-3'>

                            <Form.Group as={Col} controlId='formGridTitle'>
                                <Form.Label>Job-Title</Form.Label>
                                <Form.Control type='text' name='title' value={editJob.title} onChange={handleEditChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDuration"> <br></br>


                                <Form.Select name='type' value={editJob.type} onChange={handleEditChange}>
                                    {jobTypes.map((jobTypes) => (
                                        <option key={jobTypes} value={jobTypes} >
                                            {jobTypes} </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId='formGridCompany'>
                                <Form.Label>Company-Name</Form.Label>
                                <Form.Control type='text' name='companyname' placeholder='Company Name' value={editJob.companyname} onChange={handleEditChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLocation"><br></br>
                                <Form.Select name='location' value={editJob.location} onChange={handleEditChange}>
                                    {jobLocation.map((jobLocation) => (
                                        <option key={jobLocation} value={jobLocation} >
                                            {jobLocation} </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="jobdescription">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name='description' placeholder='Description' value={editJob.description} onChange={handleEditChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Skills">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control as="textarea" rows={2} name='skills' placeholder='Skills' value={editJob.skills} onChange={handleEditChange} />
                        </Form.Group>

                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => updateJobPosting(jobId)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal></>
    )
};


export default EditJobPosting;
