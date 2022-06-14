import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

//Other pages
import Menu from '../common/menu/menuSignup'

//css


export default class SubjectOne extends Component {
    render() {

        const inputBox = { margin: '0px', padding: '3px' }

        return (
            <>
                <Menu />
                <div className="background">
                    <div style={{ backgroundColor: 'rgba(145, 179, 243, 0.2)' }}>
                        
                        <div className="container-subject">
                            <div className="p-grid subject-box">
                                <div className="p-col-12">
                                    <div className="subject-box-title">
                                        <h3 className="subject-box-title-text">
                                            Post Learning Requirement
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-col-12">
                                    <h3>Select Subject</h3>
                                </div>
                                <div className="p-col-12" style={inputBox}>
                                    <p className="subject-required">Required field*</p>
                                    <InputText className="p-d-block otp-input" placeholder="Enter Subject Name" />
                                </div>

                                <div className="p-col-12">
                                    <Link to="/parent-student/subject-2" style={{ textDecoration: 'none' }}>
                                        <Button label="Next" className="p-button-warning otp-button" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}