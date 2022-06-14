import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import Menu from '../common/menu/menuSignup'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default class OtpComponent extends Component {
    render(){

        const inputBox = {margin:'0px',padding:'3px'}
    
        return (
          <>
          <Menu />
          <br></br>
            <div className="background">
                <div style={{backgroundColor: 'rgba(145, 179, 243, 0.2)'}}>
                    <div className="container-otp">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="otp-box">
                                <div className="p-grid">
                                    <div className="p-col-12">
                                        <h3>Enter 6 Digit OTP sent to : 9657256675</h3>
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        <InputText className="p-d-block otp-input" placeholder="Enter OTP" />
                                    </div>
                                    
                                    <div className="p-col-12" style={inputBox}>
                                        <span style={{color:'black',fontWeight:'500',fontSize:'12px'}}>
                                            Did not receive OTP?
                                            <span style={{color:'#ff8800',marginLeft:'20px'}}>
                                                Resend OTP
                                            </span>
                                        </span>
                                    </div>
                                    <div className="p-col-12">
                                        <span style={{color:'black',fontSize:'13px'}}>
                                            <b>Note :</b> Once you verify your mobile we will show list of recommended tutors and institutes
                                        </span>
                                    </div>
                                    <div className="p-col-12">
                                        <Link to="/parent-student/student" style={{textDecoration:'none'}}>
                                            <Button label="Next" className="p-button-warning otp-button" />
                                        </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </>
        )
    }
}