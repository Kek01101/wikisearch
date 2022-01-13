// src/Header.js

import './Header.css'
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import UsageModal from "./Popups/UsageModal"
import AboutModal from "./Popups/AboutModal";

const repoLink = () => {
    window.open("https://github.com/Kek01101/wikisearch/tree/master")
}

function Header() {
    const [aboutModalShow, setAboutModalShow] = React.useState(false)
    const [useModalShow, setUseModalShow] = React.useState(false)
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
                            <Button variant="flat" onClick={() => setUseModalShow(true)}>First time user?</Button>
                            <UsageModal
                                show={useModalShow}
                                onHide={() => setUseModalShow(false)}
                            />
                        </Nav>
                        <Button variant="flat" onClick={() => repoLink()}>Repository</Button>
                        <Button variant="flat" onClick={() => setAboutModalShow(true)}>About</Button>
                        <AboutModal
                            show={aboutModalShow}
                            onHide={() => setAboutModalShow(false)}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header