import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import Menu from '../common/menu/menuSignup'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Container, Row, Col } from 'react-bootstrap';
//Css

//Images
import VectorImg from '../../../assets/img/img-2.png'

export default class ParentLogin extends Component {
    render(){

        const inputBox = {margin:'0px',padding:'3px'}
    
        return (
          <>
          <Menu />
            <div className="background">
                <div style={{backgroundColor: 'rgba(145, 179, 243, 0.2)'}}>
                    
                    <div className="container-back">
                    <Row>
                        <Col lg={6}>
                                <div className="parent-login-box">
                                <div className="p-grid">
                                    <div className="p-col-12" style={{margin:'0px',padding:'3px',textAlign:'center',color:'#424241'}}>
                                        <h3>Parent Contact Details</h3>
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <InputText className="p-d-block signup-input" placeholder="First Name*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <InputText className="p-d-block signup-input" placeholder="Last Name*" />
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        <InputText className="p-d-block signup-input" placeholder="Phone Number*" />
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        <InputText className="p-d-block signup-input" placeholder="Email*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <InputText className="p-d-block signup-input" placeholder="Password*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <InputText className="p-d-block signup-input" placeholder="Confirm Password*" />
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        <InputText className="p-d-block signup-input" placeholder="Referral Code" />
                                    </div>
                                    <div className="p-col-1" style={inputBox}>
                                        <Checkbox inputId="binary" />
                                    </div>
                                    <div className="p-col-11" style={inputBox}>
                                        <span style={{color:'#ff8800',fontWeight:'500',fontSize:'12px'}}>I am the Parent / Guardian and my tutor requirement is genuine and all the information provided here is correct and authotic, I agree ti the T&C of Intutors</span>
                                    </div>
                                    <div className="p-col-6">
                                        <Link to="/parent-student/sign-up" style={{textDecoration:'none'}}>
                                            <Button label="Back" className="p-button-warning menu-botton" />
                                        </Link>
                                    </div>
                                    <div className="p-col-6">
                                        <Link to="/parent-student/otp" style={{textDecoration:'none'}}>
                                            <Button label="Next" className="p-button-warning menu-botton" />
                                        </Link>
                                    </div>
                                </div>
                                </div>
                            </Col>
                            <Col className="p-col-6" style={{padding:'50px',textAlign:'center'}}>
                                <img src={VectorImg} style={{width:'100%'}} alt="card"/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
          </>
        )
    }
}