import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

//other pages
import Menu from '../common/menu/menuSignup'


export default class SubjectThree extends Component {
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
                                            Tell Us Learning Requirement
                                            <span className="subject-box-title-sub-text">( Optional )</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-col-12" style={inputBox}>
                                    <InputTextarea className="p-d-block subject-textarea" placeholder="Type here.." />
                                </div>
                                <p className="subject-textarea-required">432 Charector Remaining</p>

                                <div className="p-col-12">
                                    <Link to="/parent-student/subject-2" style={{ textDecoration: 'none' }}>
                                        <Button label="back" className="p-button-warning subject-button" />
                                    </Link>
                                    <Link to="/parent-student/subject-final" style={{ textDecoration: 'none' }}>
                                        <Button label="Next" className="p-button-warning subject-button" />
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