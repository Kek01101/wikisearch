// src/Header.js

import './Header.css'
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <div className="Header_title">
            <Navbar bg="dark" expand="lg" variant={"dark"}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-1"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Button variant="flat">First time user?</Button>
                        </Nav>
                        <Button variant="flat">Repository</Button>
                        <Button variant="flat">About</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header