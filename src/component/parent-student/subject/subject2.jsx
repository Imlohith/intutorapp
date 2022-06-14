import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';

//Other pages
import Menu from '../common/menu/menuSignup'

export default class SubjectTwo extends Component {
    render() {


        return (
            <>
            <Menu />
                <div className="background">
                    <div style={{ backgroundColor: 'rgba(145, 179, 243, 0.2)' }}>
                        <div className="container-subject">
                            <div className="p-grid subject-box">
                                <div className="p-col-12 subject-2-box-title">
                                        <h3 className="subject-box-title-text">How would you like to have your tuition?</h3>
                                </div>
                                <div className="p-col-12 subject-topic">
                                    <Checkbox inputId="binary" /> &nbsp;&nbsp; Online 1-1 Session
                                </div>
                                <div className="p-col-12 subject-topic">
                                    <Checkbox inputId="binary" /> &nbsp;&nbsp; Online Small Group
                                </div>
                                <div className="p-col-12">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                                <div className="p-col-12">
                                    <Link to="/parent-student/subject-1" style={{ textDecoration: 'none' }}>
                                        <Button label="back" className="p-button-warning subject-button" />
                                    </Link>
                                    <Link to="/parent-student/subject-3" style={{ textDecoration: 'none' }}>
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