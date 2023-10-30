import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Newjob = () => {
    const [show, setShow] = useState(false);

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
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDuration"> <br></br>

                           
                                <Form.Select defaultValue="Full-time">
                                    <option value="Full-time" >Full-time</option>
                                    <option value="Part-time" >Part-time</option>
                                    <option value="Contract" >Contract</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId='formGridCompany'>
                                <Form.Label>Company-Name</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLocation"><br></br>
                                <Form.Select defaultValue="On-Site">
                                    <option value="On-Site">On-Site</option>
                                    <option value="Remote"  >Remote</option>
                                    <option value="Hybrid" >Hybrid</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="jobdescription">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Skills">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Newjob;