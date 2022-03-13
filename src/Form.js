import React from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Citation from "./Citation";
import ArticleAlert from "./Popups/ArticleAlert";
import FormatAlert from "./Popups/FormatAlert";
import SubmitButton from "./SubmitButton";
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
            article_1_title: "",
            article_2_title: "",
            valid_val: 0,
            searchSubmitP: 1,
            searchSelectP: 1
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

    async handleSearchSubmit() {

        if (this.state["query"] === "" && this.state["subject"] === "") {
            this.setState({valid_val: 1})
        } else if (this.state["subject"].length > 50) {
            this.setState({valid_val: 2})
        } else if (this.state["query"].length > 150) {
            this.setState({valid_val: 3})
        } else if (this.state["subject"] === "") {
            this.setState({valid_val: 4})
        } else if (this.state["query"] === "") {
            this.setState({valid_val: 5})
        } else {
            this.setState({searchSubmitP: 2})
            const subjectParam = "subject=" + this.state["subject"]
            const url = "https://wikisearch-backend.herokuapp.com/wikimatch/?" + subjectParam


            const request = await fetch(url)
            const response = await request.json()

            this.setState({
                search1: response.data0, search2: response.data1, search3: response.data2,
                search4: response.data3, search5: response.data4, step: 2, valid_val: 0
            })
        }
    }

    async handleSubjectSelection(num) {
        this.setState({searchSelectP: 2})
        const queryParam = "query=" + this.state["query"]
        const titleLoc = "search" + num
        const titleParam = "title=" + this.state[titleLoc]
        const url = "https://wikisearch-backend.herokuapp.com/wikisearch/?" + queryParam + "&" + titleParam

        const request = await fetch(url)
        const response = await request.json()

        this.setState({
            sentence1: response.sentence_1, sentence2: response.sentence_2, sentence3: response.sentence_3,
            citation1: response.citation_1, citation2: response.citation_2, citation3: response.citation_3,
            article_1_title: response.article_1_title, article_2_title: response.article_2_title,
            url: response.url
        })
        if (response.article_1_title !== "") {
            this.setState({step: 4})
        } else {
            this.setState({step: 3})
        }
    }

    async handleNewSubject(num) {
        this.setState({searchSelectP: 2, step: 2, article_1_title: "", article_2_title: ""})
        const queryParam = "query=" + this.state["query"]
        const titleLoc = "article_" + num + "_title"
        const titleParam = "title=" + this.state[titleLoc]

        const url = "https://wikisearch-backend.herokuapp.com/wikisearch/?" + queryParam + "&" + titleParam

        const request = await fetch(url)
        const response = await request.json()

        this.setState({
            sentence1: response.sentence_1, sentence2: response.sentence_2, sentence3: response.sentence_3,
            citation1: response.citation_1, citation2: response.citation_2, citation3: response.citation_3,
            article_1_title: response.article_1_title, article_2_title: response.article_2_title,
            url: response.url
        })
        if (response.article_1_title !== "") {
            this.setState({step: 4})
        } else {
            this.setState({step: 3})
        }
    }

    render() {
        const {
            step, search1, search2, search3, search4, search5,
            sentence1, sentence2, sentence3,
            citation1, citation2, citation3,
            article_1_title, article_2_title,
            url, valid_val,
            searchSubmitP, searchSelectP
        } = this.state
        switch (step) {
            case 1:
                return (
                    <Container style={{
                        maxWidth: '35%',
                        minWidth: '300px'
                    }}>
                        <FormatAlert
                        val={valid_val}/>
                        <Form>
                            <Row style={{maxWidth: "100%"}}>
                                <Form.Group as={Col} controlId="subjectGroup">
                                    <Form.Control type="subject" placeholder="Enter Subject" autocomplete="off"
                                                  onChange={this.handleSubjectChange}
                                                  style={{fontSize: "85%"}}/>
                                </Form.Group>

                                <SubmitButton
                                    onSubmit={() => this.handleSearchSubmit()}
                                    p={searchSubmitP}
                                />
                            </Row>
                            <br />
                            <Form.Group controlId="queryGroup">
                                <Form.Control type="query" placeholder="Enter Query" onChange={this.handleQueryChange}
                                              autocomplete="off"
                                              style={{fontSize: "85%",
                                                      maxWidth: "98%"}}/>
                            </Form.Group>
                        </Form>
                    </Container>
                )
            case 2:
                switch (searchSelectP) {
                    case 1:
                        return (
                            <div>
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
                                <br />
                                <Row>
                                    <Button className="pull-right" variant="flat" type="button" style={{
                                        maxWidth: "100px"}} onClick={() => this.setState({step: 1, searchSubmitP: 1})}>Back</Button>
                                </Row>
                            </div>
                        )
                    case 2:
                        return (
                            <div style={{minWidth: "100px",
                                        minHeight: "100px"}}>
                                <Spinner
                                    animation="border"
                                    size="large"
                                    role="status"
                                    aria-hidden="true"
                                    style={{minWidth: "100px",
                                            minHeight: "100px"}}
                                />
                            </div>
                        )
                }
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
                        <Row>
                            <Button className="pull-right" variant="flat" type="button" style={{
                                maxWidth: "100px"}} onClick={() => this.setState({step: 2, searchSelectP: 1})}>Back</Button>
                        </Row>
                        <br />
                        <a href={url} target="_blank" rel="noreferrer">Click here to go to source Wikipedia page</a>
                        <br />
                    </div>
                )
            case 4:
                console.log(article_1_title)
                console.log(article_2_title)
                return(
                    <div>
                    <ArticleAlert
                        article1title={article_1_title}
                        article2title={article_2_title}
                        newSubject={(num) => this.handleNewSubject(num)}
                    />
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
                            <Row>
                                <Button className="pull-right" variant="flat" type="button" style={{
                                    maxWidth: "100px"}} onClick={() => this.setState({step: 2, searchSelectP: 1})}>Back</Button>
                            </Row>
                            <br />
                            <a href={url} target="_blank" rel="noreferrer">Click here to go to source Wikipedia page</a>
                            <br />
                        </div>
                    </div>
                )
        }
    }
}


export default SearchForm;