import {Button, Spinner, Col} from "react-bootstrap";
import React from "react";

function SubmitButton(props) {
    switch(props.p) {
        case 1:
            return (
                <Button as={Col} variant="flat" type="submit"
                        onClick={props.onSubmit}
                        style={{fontSize: "85%",
                            maxWidth: "160px"}}>
                Search</Button>
            )
        case 2:
            return (
                <Button as={Col} variant="flat" disabled
                        style={{fontSize: "85%",
                            maxWidth: "160px"}}>
                    <Spinner
                        as="span"
                        animation="border"
                        size="medium"
                        role="status"
                        aria-hidden="true"
                    />
                </Button>
            )
        default:
            return (<br/>)
    }
}

export default SubmitButton