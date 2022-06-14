    import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import Menu from '../common/menu/menuSignup'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';


export default class TutorSignUp extends Component {
    render(){

        const inputBox = {margin:'5px 0px',padding:'3px'}
    
        return (
          <>
          <Menu />
            <div className="background" style={{height:'1000px'}}>
                <div style={{backgroundColor: 'rgba(145, 179, 243, 0.2)'}}>
                    
                    <div className="container-back">
                        <div className="p-grid">
                            <div className="p-col-2"></div>
                            <div className="p-col-8">
                                <div className="parent-login-box" style={{marginTop: '0px',padding: '20px 100px'}}>
                                <div className="p-grid">
                                    <div className="p-col-12" style={{margin:'0px',padding:'3px',textAlign:'center',color:'#424241'}}>
                                        <h2>Join Intutors Now To Grow Your Tutoring Income</h2>
                                        <p style={{fontSize:'13px'}}>Intutors one of Indas Leading private tutoring network, offering you the opportunity to become a prive tutor and start teachning at place and time suiting you.</p>
                                        <h1 style={{fontWeight:'300'}}>Personal Profile</h1>
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        <span style={{color: 'red'}}>*</span>Name
                                        <InputText className="p-d-block signup-input" placeholder="Type Your Full Name*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <span style={{color: 'red'}}>*</span>Gender
                                        <InputText className="p-d-block signup-input" placeholder="Gender*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <span style={{color: 'red'}}>*</span>Date Of Birth
                                        <InputText className="p-d-block signup-input" placeholder="DOB*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <span style={{color: 'red'}}>*</span>Mobile
                                        <InputText className="p-d-block signup-input" placeholder="Enter Mobile*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <span style={{color: 'red'}}>*</span>Email
                                        <InputText className="p-d-block signup-input" placeholder="Enter Email*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <span style={{color: 'red'}}>*</span>City
                                        <InputText className="p-d-block signup-input" placeholder="Enter City*" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <span style={{color: 'red'}}>*</span>Pin Code
                                        <InputText className="p-d-block signup-input" placeholder="Enter Pin Code*" />
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        <span style={{color: 'red'}}>*</span>Address
                                        <InputText className="p-d-block signup-input" style={{height:'100px'}} placeholder="Address*" />
                                    </div>
                                    <div className="p-col-1" style={inputBox}>
                                        <Checkbox inputId="binary" />
                                    </div>
                                    <div className="p-col-11" style={inputBox}>
                                        <span style={{color:'#ff8800',fontWeight:'500',fontSize:'12px'}}>I accept the Terms of Service and Privacy policy of Intutors</span>
                                    </div>
                                    
                                    <div className="p-col-6">
                                        <Link to="/tutor/sign-up" style={{textDecoration:'none'}}>
                                            <Button label="Back" className="p-button-warning menu-botton" />
                                        </Link>
                                    </div>
                                    <div className="p-col-6">
                                        <Link to="/tutor/tutor-otp" style={{textDecoration:'none'}}>
                                            <Button label="Next" className="p-button-warning menu-botton" />
                                        </Link>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            </div>
          </>
        )
    }
}