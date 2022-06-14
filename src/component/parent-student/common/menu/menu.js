import React, { Component } from 'react'

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

//images
import Logo from '../../../../assets/img/logo-2.jpg'

export default class Menu extends Component {
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
                                <Nav.Link href="#home">
                                    <span className="menu-text"><i className="pi pi-search"></i> &nbsp;Find Tutors</span>
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    <span className="menu-text"><i className="pi pi-info-circle"></i> &nbsp; Help</span>
                                </Nav.Link>
                                <NavDropdown title={
                                    <div className="avtar">
                                        A
                                    </div>
                                }
                                    id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <div className="menu-dropdown-item"><b>Status</b> : Online</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/parent-student/dashboard">
                                        <div className="menu-dropdown-item">Dashboard</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className="menu-dropdown-item">Feedback</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/parent-student/">
                                        <div className="menu-dropdown-item">Logout</div>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* <Nav.Link href="#link">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br></br>
                <br></br>
                <br></br>
            </>
        )
    }
}