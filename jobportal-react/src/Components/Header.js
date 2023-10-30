import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <div className='Header'>
            <Container>
                <Row>
                    
                    <Col sm={8} className='title'>Job Portal</Col>
                    
                    
                    <Col sm={4} className='jp'>
                        <Button variant="info" size="lg" className='jobposting'>Job-Posting</Button>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Header;

