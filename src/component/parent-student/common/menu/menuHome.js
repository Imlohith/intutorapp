import React,{ Component } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

//images
import Logo from '../../../../assets/img/logo-2.jpg'

export default class MenuHome extends Component {

    render(){
        return (
          <>
          <Navbar className="menu-bar-dashboard" bg="light" expand="lg">
                        <Navbar.Brand href="#home">
                            <img src={Logo} className="menu-logo" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/parent-student/subject-1">
                                    <span className="menu-text-dashboard"> Home</span>
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    <span className="menu-text-dashboard"> Search</span>
                                </Nav.Link>
                                <Nav.Link href="#link">
                                &nbsp;&nbsp;&nbsp;<i className="pi pi-comments"></i>
                                </Nav.Link>
                                <Nav.Link href="#link" style={{borderRight: '2px solid silver',margin:'0px 20px'}}>
                                    <i className="pi pi-bell"></i> &nbsp;&nbsp;&nbsp;
                                </Nav.Link>
                               
                                <NavDropdown title={<span className="menu-text-dashboard"> Mr. Admin</span>}
                                    id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <div className="menu-dropdown-item"><b>Status</b> : Online</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className="menu-dropdown-item">Profile</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className="menu-dropdown-item">Feedback</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/parent-student/">
                                        <div className="menu-dropdown-item">Logout</div>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">
                                    <div className="avtar">
                                        A
                                    </div>
                                </Nav.Link>
                                <Nav.Link className="nav-link-button" href="/parent-student">
                                    &nbsp;&nbsp;&nbsp;
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
          {/* <div style={{overflow:'none'}}>
          <div className="p-grid menu-bar-dashboard" style={{boxShadow:'0px 0px 10px silver'}}>
                <div className="p-col-7">
                    <img src={Logo} className="menu-logo" alt="logo"/>
                </div>
                <div className="p-col-1 menu-item-dashboard" style={{textAlign:'right'}}>
                    <span className="menu-text-dashboard"> Home</span>
                </div>
                <div className="p-col-1 menu-item-dashboard" style={{textAlign:'center'}}>
                    <span className="menu-text-dashboard"> Search</span>
                </div>
                <div className="p-col-1 menu-item-dashboard" style={{textAlign:'center'}}>
                    <i className="pi pi-comments"></i> &nbsp; &nbsp; &nbsp; &nbsp;
                    <i className="pi pi-bell"></i>
                </div>
                <div className="p-col-1 menu-item-dashboard" style={{borderLeft:'1px solid #f2f2f2'}}>
                <Dropdown>
                    <Dropdown.Toggle className="menu-dropdown">
                        Mr. Admin <i className="pi pi-angle-down"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="menu-item-content" >
                        <Dropdown.Item className="menu-item-box">
                            <div className="menu-dropdown-item"><b>Status</b> : Online</div>
                        </Dropdown.Item>
                        <Dropdown.Item className="menu-item-box">
                            <div className="menu-dropdown-item">Profile</div>
                        </Dropdown.Item>
                        <Dropdown.Item className="menu-item-box">
                            <div className="menu-dropdown-item">Feedback</div>
                        </Dropdown.Item>
                        <Dropdown.Item href="/" className="menu-item-box">
                            <div className="menu-dropdown-item">Logout</div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="p-col-1 menu-item-dashboard">
                        <div className="avtar-1">
                            A
                        </div>
                </div>
          </div>
          <div style={{height: '80px'}}>
            Dashboard
          </div>
          </div> */}
          <div style={{height: '80px'}}>
            Dashboard
          </div>
          </>
        )
    }
}