import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

//Other Pages
import Menu from '../common/menu/menuSignup'

//Css

//Images
import Img from '../../../assets/img/request.jpg'

export default class RequestComponent extends Component {
    render(){

        const inputBox = {margin:'3px 0px',padding:'3px'}

        const bottom = {marginBottom: '0rem'}
    
        return (
          <>
            <div className="background">
                <div style={{backgroundColor: 'rgba(145, 179, 243, 0.2)'}}>
                    <Menu />
                    <div className="container-request">
                        <div className="p-grid">
                            <div className="p-col-7">
                            <div className="p-grid">
                                    <div className="p-col-12" >
                                        <h3>Topic Request</h3>
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">First Name</label>
                                            <InputText className="p-d-block login-input" placeholder="First Name*" />
                                        </div>
                                        
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Last Name</label>
                                            <InputText className="p-d-block login-input" placeholder="Last Name*" />
                                        </div>
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Email Address</label>
                                            <InputText className="p-d-block login-input" placeholder="Type here*" />
                                        </div>
                                    </div>

                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Grade</label>
                                            <InputText className="p-d-block login-input" placeholder="Type here*" />
                                        </div>
                                    </div>

                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Topic You Want To Request</label>
                                            <InputText className="p-d-block login-input" placeholder="Type here*" />
                                        </div>
                                    </div>
                                    
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Subject</label>
                                            <InputText className="p-d-block login-input" placeholder="Type here*" />
                                        </div>
                                    </div>
                                    
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Prefered Teacher  if any</label>
                                            <InputText className="p-d-block login-input" placeholder="Type here*" />
                                        </div>
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Date of Required Topic</label>
                                            <InputText className="p-d-block login-input" placeholder="Type here*" />
                                        </div>
                                    </div>
                                    
                                    <div className="p-col-12" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Message</label>
                                            <InputText className="p-d-block login-input" placeholder="Type here*" />
                                        </div>
                                    </div>

                                    
                                    <div className="p-col-6">
                                        <Link to="/parent-student/parent-login" style={{textDecoration:'none'}}>
                                            <Button label="Submit Your Request" className="p-button-warning menu-botton" />
                                        </Link>
                                    </div>
                                    <div className="p-col-6">
                                    </div>
                                </div>
                                </div>
                            <div className="p-col-5" style={{ textAlign:'center'}}>
                                <img src={Img}  style={{width:'80%'}} alt="Request"/>
                                <p className="request-right-text">Please fill in the form to request a topic on Intutors</p>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                </div>
            </div>
          </>
        )
    }
}