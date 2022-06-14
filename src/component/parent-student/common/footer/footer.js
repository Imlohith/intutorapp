import React,{ Component } from 'react'

import { Button } from 'primereact/button';
import { Row, Col } from 'react-bootstrap';

import 'primeflex/primeflex.css';

export default class Footer extends Component {
    render(){
    
        return (
          <>
            <div className="footer-request-box">
                <h3>Interested in something particular? Did not find what you need?</h3>
                <Button label="Request a topic" className="request-button" />
            </div>
            <div className="footer-box">
                    <Row>
                        <Col lg={3}>
                            <h2 style={{fontWeight:'100'}}> <i className="pi pi-amazon"></i> Lerning persanalised </h2>
                            <p>"Make learning complete, fun and <br></br> growing"</p>

                            <br></br><br></br><br></br><br></br>
                            <i className="pi pi-facebook"></i> &nbsp;&nbsp;
                            <i className="pi pi-google"></i> &nbsp;&nbsp;
                            <i className="pi pi-twitter"></i> &nbsp;&nbsp;
                            <i className="pi pi-youtube"></i> &nbsp;&nbsp;

                            <br></br><br></br>
                            @ 2020 Intutors, Inc
                        </Col>
                    <Col lg={7}>
                        <div className="p-grid">
                            <div className="p-col-3">
                                <h3>Learn</h3>
                                <div className="footer-link-item">Request a tutor</div>
                                <div className="footer-link-item">Explore Subjects</div>
                                <div className="footer-link-item">How it works</div>
                                <div className="footer-link-item">Testimonials</div>
                                <div className="footer-link-item">Blogs</div>
                            </div>
                            <div className="p-col-3">
                                <h3>Teach</h3>
                                <div className="footer-link-item">Beacome a Tutor</div>
                                <div className="footer-link-item">Work with us</div>
                                <div className="footer-link-item">Our Partners</div>
                            </div>
                            <div className="p-col-3">
                                <h3>About</h3>
                                <div className="footer-link-item">Compnay</div>
                                <div className="footer-link-item">Careers</div>
                                <div className="footer-link-item">Contact</div>
                            </div>
                            <div className="p-col-3">
                                <h3>Support</h3>
                                <div className="footer-link-item">FAQ's</div>
                                <div className="footer-link-item">Privacy</div>
                                <div className="footer-link-item">Tearms</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <h3>Download</h3>
                        <p>Experience our tutors from your devices</p>
                    </Col>
                </Row>
            </div>
          </>
        )
    }
}