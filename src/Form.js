import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            subject: ""
        }

        this.handleSubjectChange = this.handleSubjectChange.bind(this)
        this.handleQueryChange = this.handleQueryChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubjectChange(event) {
        this.setState({"subject": event.target.value})
    }
    handleQueryChange(event) {
        this.setState({"query": event.target.value})
    }
    async handleSubmit(event) {
        event.preventDefault()
        const queryParam = "query=" + this.state["query"]
        const subjectParam = "subject=" + this.state["subject"]

        const url =
            "https://wikisearch-backend.herokuapp.com/wikisearch/?" +
            queryParam + "&" + subjectParam

        const request = await fetch(url)
        const response = await request.json()
        console.log(response.sentence_1)
        console.log(response.sentence_2)
        console.log(response.sentence_3)
    }


    render() {
        return (
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="subjectGroup">
                        <Form.Control type="subject" placeholder="Enter Subject" onChange={this.handleSubjectChange}/>
                    </Form.Group>

                    <Button as={Col} variant="flat" type="submit" onClick={this.handleSubmit}>Search</Button>
                </Row>
                <Form.Group controlId="queryGroup">
                    <Form.Control type="query" placeholder="Enter Query" onChange={this.handleQueryChange}/>
                </Form.Group>
            </Form>
        )
    }
}


export default SearchForm;