// src/Body.js

import './Body.css';
import logo from './logo.png';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Body() {
    return (
        <div className="Body-test">
            <img src={logo} alt="Logo" width="50%" height="auto"/>
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="subjectGroup">
                        <Form.Control type="subject" placeholder="Enter Subject" />
                    </Form.Group>

                    <Button as={Col} variant="flat" type="submit">Search</Button>
                </Row>
                <Form.Group controlId="queryGroup">
                    <Form.Control type="query" placeholder="Enter Query" />
                </Form.Group>
            </Form>
        </div>
    )
}
export default Body