import {Modal, Button} from "react-bootstrap";


function UsageModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    How to use Wikisearch
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                    <li>Input the subject of your search into the "subject" box<br/>Ex. "Power"</li>
                    <br/>
                    <li>Input your query regarding the subject into the "query" box<br/>Ex. "What is the unit
                    of power?"</li>
                    <br/>
                    <li>Click search!</li>
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="flat" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UsageModal