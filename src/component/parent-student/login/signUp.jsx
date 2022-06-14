import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Container, Row, Col } from 'react-bootstrap';

//Other Pages
import Menu from '../common/menu/menuSignup'

//Images
import SignUp1 from '../../../assets/img/sign-up-1.jpg'
import SignUp2 from '../../../assets/img/sign-up-2.jpg'



export default class SignUp extends Component {
    render() {
        return (
            <>
                <Menu />
                <Row className="container-sign-up">
                    <Col lg={6}>
                        <Row className="container-sign-up-box">
                            <Col lg={6} className="sign-up-img-box">
                                <img src={SignUp1} className="sign-up-img" alt="left side signup" />
                            </Col>
                            <Col lg={6} className="sign-up-box">
                                <h3 className="sing-up-title">Student & Parent</h3>
                                <p>Discover amazing teachers, post tution jobs, take enriching courses</p>
                                <Link to="/parent-student/parent-login">
                                    <Button label="Sign Up" style={{ width: '120px' }} className="p-button-warning menu-botton" />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className="container-sign-up-box" style={{borderLeft: '2px solid silver'}}>
                            <Col lg={6} className="sign-up-img-box">
                                <img src={SignUp2} className="sign-up-img" alt="right side signup" />
                            </Col>
                            <Col lg={6} className="sign-up-box">
                                <h3 className="sing-up-title">Tutors & Trainers</h3>
                                <p>Find tution jobs, build your teaching career, teach ofline courses</p>
                                <Link to="/parent-student/dashboard" >
                                    <Button label="Sign Up" style={{ width: '120px' }} className="p-button-warning menu-botton" />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Link to="/parent-student/" style={{ textDecoration: 'none' }}>
                    <div style={{ textAlign: 'center', color: '#8f8d8c' }}>
                        Already have an account? <span style={{ color: '#ff8800', fontWeight: '700' }}>Login here</span>
                    </div>
                </Link>
            </>
        )
    }
}