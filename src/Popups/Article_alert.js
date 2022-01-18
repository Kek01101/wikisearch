import React from "react";
import {Alert, Container} from "react-bootstrap";
import NewArticleModal from "./NewArticleModal";

function ArticleAlert(props) {
    const [show, setShow] = React.useState(true)
    const [modalShow, modalSetShow] = React.useState(false)

    if (show) {
        return(
            <Container>
                <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    Our database shows that other articles might fit your search better. Click{' '}
                    <Alert.Link href="#" onClick={() => modalSetShow(true)}>here</Alert.Link> to browse them if you like.
                </Alert>
                <NewArticleModal
                    show={modalShow}
                    onHide={() => modalSetShow(false)}
                    article1title={props.article1title}
                    article2title={props.article2title}
                    newSubject={(num) => props.newSubject(num)}
                />
            </Container>
        )
    } else {
        return(<br/>)
    }
}

export default ArticleAlert