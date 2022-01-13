import {Modal, Button} from "react-bootstrap";


function AboutModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    About Wikisearch
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Wikisearch was created as an Internal Assessment project for my IB computer science course. This
                    product is aimed at helping students get a quick start on research by immediately allowing them to
                    find sources and citations with only one click of a button. Unsure how to begin? Click the first
                    time user button!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="flat" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AboutModal