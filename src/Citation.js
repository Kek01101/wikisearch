import React from "react";
import {Button, Row, Col, Container} from "react-bootstrap";
import CitationModal from "./Popups/CitationModal";
import "./Citation.css";

function Citation(props) {
    const [modalShow, setModalShow] = React.useState(false)
    return (
        <Container className="my-auto">
            <Row style={{textAlign: "left"}}>
                Sentence {props.digit}:
            </Row>
            <Row>
                <Col style={{textAlign: "left", fontSize: "70%"}}>{props.sentence}</Col>
                <Button as={Col} sm={1} variant="wide" onClick={() => setModalShow(true)}>Citation</Button>
            </Row>
            <CitationModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                citation={props.citation}
            />
        </Container>
    )
}

export default Citation