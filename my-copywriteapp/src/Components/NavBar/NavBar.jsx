import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavBar.css"
import { useDispatch } from "react-redux";
import { getText, getTexts } from "../../Redux/Actions/Actions"



function OffcanvasExample() {
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    function handleSubmitText(e, value) {
        e.preventDefault();
        if (value) {
            dispatch(getText(value))
            dispatch(getTexts())
            setText("")
        } else {
            alert("No text.")
        }
    }

    function handleChange(e) {
        setText(`${e.target.value}`)
    }

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="danger" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    NavBar Mobile
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Form className="d-flex" onSubmit={(e) => handleSubmitText(e, text)}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Insert Text"
                                        className="me-2"
                                        aria-label="Search"

                                        value={text}
                                        name="text"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <Button variant="primary" type="submit">Send</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;