import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Citation from "./Citation";
import "./Form.css"

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            query: "",
            subject: "",
            search1: "",
            search2: "",
            search3: "",
            search4: "",
            search5: "",
            sentence1: "",
            sentence2: "",
            sentence3: "",
            citation1: "",
            citation2: "",
            citation3: "",
            url: "",
            article_1: "",
            article_2: ""
        }

        this.handleSubjectChange = this.handleSubjectChange.bind(this)
        this.handleQueryChange = this.handleQueryChange.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
        this.handleSubjectSelection = this.handleSubjectSelection.bind(this)
    }

    handleSubjectChange(event) {
        this.setState({"subject": event.target.value})
    }

    handleQueryChange(event) {
        this.setState({"query": event.target.value})
    }

    async handleSearchSubmit(event) {
        event.preventDefault()

        const subjectParam = "subject=" + this.state["subject"]
        const url = "https://wikisearch-backend.herokuapp.com/wikimatch/?" + subjectParam


        const request = await fetch(url)
        const response = await request.json()

        this.setState({
            search1: response.data0, search2: response.data1, search3: response.data2,
            search4: response.data3, search5: response.data4, step: 2
        })
    }

    async handleSubjectSelection(num) {
        const queryParam = "query=" + this.state["query"]
        const titleLoc = "search" + num
        const titleParam = "title=" + this.state[titleLoc]
        const url = "https://wikisearch-backend.herokuapp.com/wikisearch/?" + queryParam + "&" + titleParam

        const request = await fetch(url)
        const response = await request.json()

        this.setState({
            sentence1: response.sentence_1, sentence2: response.sentence_2, sentence3: response.sentence_3,
            citation1: response.citation_1, citation2: response.citation_2, citation3: response.citation_3,
            article_1: response.article_1, article_2: response.article_2,
            url: response.url, step: 3
        })
    }

    render() {
        const {
            step, search1, search2, search3, search4, search5,
            sentence1, sentence2, sentence3,
            citation1, citation2, citation3,
            url
        } = this.state
        switch (step) {
            case 1:
                return (
                    <Form>
                        <Row>
                            <Form.Group as={Col} controlId="subjectGroup">
                                <Form.Control type="subject" placeholder="Enter Subject"
                                              onChange={this.handleSubjectChange}/>
                            </Form.Group>

                            <Button as={Col} variant="flat" type="submit" onClick={this.handleSearchSubmit}>Search</Button>
                        </Row>
                        <Form.Group controlId="queryGroup">
                            <Form.Control type="query" placeholder="Enter Query" onChange={this.handleQueryChange}/>
                        </Form.Group>
                    </Form>
                )
            case 2:
                return (
                    <Form>
                        <Form.Text className="formText">
                            We found multiple pages for your search,<br />please select the most relevant.
                        </Form.Text>
                        <Row>
                            <Button variant="flat" type="button" onClick={() => this.handleSubjectSelection("1")}>{search1}</Button>
                        </Row>
                        <br />
                        <Row>
                            <Button variant="flat" type="button" onClick={() => this.handleSubjectSelection("2")}>{search2}</Button>
                        </Row>
                        <br />
                        <Row>
                            <Button variant="flat" type="button" onClick={() => this.handleSubjectSelection("3")}>{search3}</Button>
                        </Row>
                        <br />
                        <Row>
                            <Button variant="flat" type="button" onClick={() => this.handleSubjectSelection("4")}>{search4}</Button>
                        </Row>
                        <br />
                        <Row>
                            <Button variant="flat" type="button" onClick={() => this.handleSubjectSelection("5")}>{search5}</Button>
                        </Row>
                    </Form>
                )
            case 3:
                return(
                    <div id="citation">
                        <Citation
                            digit={1}
                            sentence={sentence1}
                            citation={citation1}
                        />
                        <Citation
                            digit={2}
                            sentence={sentence2}
                            citation={citation2}
                        />
                        <Citation
                            digit={3}
                            sentence={sentence3}
                            citation={citation3}
                        />
                        <br />
                        <a href={url}>Click here to go to source Wikipedia page</a>
                        <br />
                    </div>
                )
        }
    }
}


export default SearchForm;