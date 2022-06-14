import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { Row, Col } from 'react-bootstrap';

//Images
import Logo1 from '../../../assets/img/logo-1.jpg'
import Img1 from '../../../assets/img/img-1.jpg'

import 'primeflex/primeflex.css';


export default class LoginComponent extends Component {
    render(){
    
        return (
          <>
          <div className="container-login">
                <Row>
                    <Col lg={6}>
                    <div className="login-box">
                        <div style={{textAlign:'center'}}>
                            <img src={Logo1} className="login-logo-1" alt="websitelogo"/>
                            <h1 className="login-head-text">Login In to Intutors</h1>
                            <br></br>
                            <span className="social facebook">&nbsp;F&nbsp;&nbsp;</span>
                            <span className="social google">G+</span>
                            <span className="social in">&nbsp;in&nbsp;&nbsp;</span>
                            <br></br>
                            <div className="or-text">Or use your email account</div>
                        </div>
                        <div>
                            <div className="p-field">
                                <label htmlFor="username1" className="p-d-block input-head-text">Email or Phone</label>
                                <InputText id="username1" placeholder="Enter Email or Phone number" aria-describedby="username1-help" className="p-d-block login-input"/>
                            </div>
                            <div className="p-field">
                                <label htmlFor="username1" className="p-d-block input-head-text">Password</label>
                                <InputText id="username1" placeholder="Min 8 Characters" aria-describedby="username1-help" className="p-d-block login-input"/>
                            </div>
                            
                        </div>
                        <div style={{textAlign:'center'}}>
                            <div className="forgot-text">Forgot your password</div>
                            <Link to="/tutor/dashboard" style={{textDecoration:'none'}}>
                                <Button label="Log in" className="p-button-warning login-botton" />
                            </Link>
                        </div>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <Link to="/tutor/sign-up">
                        <img src={Img1} style={{width:'100%', height:'99vh'}} alt="card"/>
                    </Link>
                </Col>
                </Row>
            </div>
          </>
        )
    }
}