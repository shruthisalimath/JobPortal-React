import { useState } from 'react';
import axios from 'axios';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Newjob = () => {
    const [show, setShow] = useState(true);

    const [newJob, setNewJob ] = useState({
        title: '', 
        type:'Full-time',
        companyname: '', 
        location: 'on-site',
        description: '',
        skills: ''       
     });

     const jobTypes = ['full-time','part-time','contract'];
     const jobLocation = ['on-site','remote','hybrid'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewJob((prevJob) => ({ 
            ...prevJob, 
            [name]: value,
        }));
    };

    const createNewJob = (e) => {
        e.preventDefault();//prevent default form submission
        axios.post('http://localhost:5001/jobs', newJob)
        .then ((res) => {
            //handle success
            console.log("New Job Added!!", res.data);
        })
        .catch ((error) => {
            //handle errors
            console.log('Error Adding Job!!', error);
        });
    }

    const handleClose = () => setShow(false );
    //const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Post Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId='formGridTitle'>
                                <Form.Label>Job-Title</Form.Label>
                                <Form.Control type='text' name='title' placeholder='Job Title' value ={newJob.title} onChange = {handleInputChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDuration"> <br></br>

                           
                                <Form.Select name='type' value={newJob.type} onChange={handleInputChange}>
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
                                <Form.Control type='text' name='companyname' placeholder='Company Name' value ={newJob.companyname} onChange = {handleInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLocation"><br></br>
                                <Form.Select name='location' value={newJob.location} onChange={handleInputChange}>
                                {jobLocation.map((jobLocation) => (
                                    <option key={jobLocation} value={jobLocation} >
                                        {jobLocation} </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="jobdescription">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control as="textarea" rows={3}  name='description' placeholder='Description' value ={newJob.description} onChange = {handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Skills">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control as="textarea" rows={2} name='skills' placeholder='Skills' value ={newJob.skills} onChange = {handleInputChange} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createNewJob}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Newjob;
