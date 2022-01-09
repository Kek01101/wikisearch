import React from "react";
import {Button, Row, Col} from "react-bootstrap";
import CitationModal from "./Modals/CitationModal";

function Citation(props) {
    const [modalShow, setModalShow] = React.useState(false)
    return (
        <div>
            <Row>
                Sentence {props.digit}
            </Row>
            <Row>
                <Col sm={8}>{props.sentence}</Col>
                <Button as={Col} sm={4} onClick={() => setModalShow(true)}>Citation</Button>
            </Row>
            <CitationModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                citation={props.citation}
            />
        </div>
    )
}

export default Citation