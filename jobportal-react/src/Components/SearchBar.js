import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SearchBar = () => {
    return (
        <div className="search-bar">
            <Container >
                <Form>
                    <Row>
                        <Form.Group as={Col} className="Job-Duration">
                            <Form.Select  defaultValue="ALL">
                                <option value="ALL" >ALL</option>
                                <option value="Full-time" >Full-time</option>
                                <option value="Part-time" >Part-time</option>
                                <option value="Contract" >Contract</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} className="Job-Location">
                            <Form.Select defaultValue="ALL">
                                <option value="ALL" >ALL</option>
                                <option value="On-Site">On-Site</option>
                                <option value="Remote"  >Remote</option>
                                <option value="Hybrid" >Hybrid</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} className="Job-Search">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default SearchBar;
