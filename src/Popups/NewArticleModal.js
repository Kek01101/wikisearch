import {Modal, Button, Row, Col} from "react-bootstrap";

function NewArticleModal(props) {
    if (props.article2title !== "") {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Other articles which may suit your search:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            {props.article1title}
                        </Col>
                        <Button as={Col} variant="flat" onClick={() => props.newSubject(1)}>
                            Select
                        </Button>
                    </Row>
                    <Row>
                        <Col>
                            {props.article2title}
                        </Col>
                        <Button as={Col} variant="flat" onClick={() => props.newSubject(2)}>
                            Select
                        </Button>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="flat" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    } else {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Another article which may suit your search:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            {props.article1title}
                        </Col>
                        <Button as={Col} variant="flat" onClick={props.newSubject(1)}>
                            Select
                        </Button>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="flat" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default NewArticleModal