import React from "react";
import {Alert, Collapse} from "react-bootstrap";

function FormatAlert(props) {
    switch (props.val) {
        case 1:
            return(
                <Alert
                    variant={'danger'}
                    transition={Collapse}
                    style={{fontSize: '18px'}}>
                    Neither the subject or query fields can remain empty!
                </Alert>
            )
        case 2:
            return(
                <Alert
                    variant={'danger'}
                    transition={Collapse}
                    style={{fontSize: '16px'}}>
                    Your subject is too long, please reduce it to below 100 characters!
                </Alert>
            )
        case 3:
            return(
                <Alert
                    variant={'danger'}
                    transition={Collapse}
                    style={{fontSize: '16px'}}>
                    Your query is too long, please reduce it to below 150 characters!
                </Alert>
            )
        case 4:
            return(
                <Alert
                    variant={'danger'}
                    transition={Collapse}
                    style={{fontSize: '18px'}}>
                    The subject field can not remain empty!
                </Alert>
            )
        case 5:
            return(
                <Alert
                    variant={'danger'}
                    transition={Collapse}
                    style={{fontSize: '18px'}}>
                    The query field can not remain empty!
                </Alert>
            )
        default:
            return(
                <br/>
            )
    }
}

export default FormatAlert