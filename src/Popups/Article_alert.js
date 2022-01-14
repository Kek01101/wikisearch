import React from "react";
import {Alert} from "react-bootstrap";

function ArticleAlert(props) {
    const [show, setShow] = React.useState(true)

    if (show) {
        return(
            <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                Our database shows that other articles might fit your search better. Click{' '}
                <Alert.Link href="#">here</Alert.Link> to browse them if you like.
            </Alert>
        )
    } else {
        return(<br/>)
    }
}

export default ArticleAlert