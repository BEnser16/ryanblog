import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-2">
            <Container className='d-flex justify-content-center' >
                <Row className='mt-4'>
                    <p>Copyright © 2024 RyanDAI All rights reserved.</p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;