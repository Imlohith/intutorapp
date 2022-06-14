import React, { Component } from 'react'
import { Button } from 'primereact/button';
import { Container, Navbar, Nav } from 'react-bootstrap';

//images
import Logo from '../../../../assets/img/logo-2.jpg'


export default class MenuSignUp extends Component {
    render() {
        return (
            <>
                <Navbar className="menu-bar" bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Logo} className="menu-logo" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link className="nav-link-text" href="/parent-student/subject-1">
                                    <span className="menu-text"> Find Classes  &nbsp;<i className="pi pi-angle-down"></i></span>
                                </Nav.Link>
                                <Nav.Link className="nav-link-button" href="#link">
                                    <Button label="Find a Tutor" className="p-button-warning menu-botton" />
                                </Nav.Link>
                                <Nav.Link className="nav-link-button" href="/parent-student">
                                    <Button label="Login" className="p-button-warning menu-login-botton" />
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}