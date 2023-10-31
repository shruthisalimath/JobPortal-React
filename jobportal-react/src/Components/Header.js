import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NewJobPosting from './Job-Posting/NewJobPosting';

const Header = () => {
    const [showNewJob, setShowNewJob ] = useState (false);

const handleShow = () => {
    console.log("Job-Posting button clicked");
    setShowNewJob(true);
};
    return (
        <div className='Header'>
            <Container>
                <Row>
                    
                    <Col sm={8} className='title'>Job Portal</Col>
                    
                    
                    <Col sm={4} className='jp'>
                        <Button  variant="info" size="lg" className='jobposting' onClick={handleShow} >Job-Posting</Button>
                    </Col>
                    
                </Row>
            </Container>
            
            {showNewJob && <NewJobPosting />}
        </div>
    );
};

export default Header;

