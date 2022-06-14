import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

//Other Pages
import Menu from '../../common/menu/menuHome'
import Sidebar from '../../common/sidebar/sidebar'

export default class Setting extends Component {

    render() {
        const inputBox = { margin: '3px 0px', padding: '3px' }

        const bottom = { marginBottom: '0rem' }

        return (
            <>
                <Menu />
                <div className="p-grid" style={{ backgroundColor: '#F9FCFE', height: 'auto' }}>
                    <div className="p-col-2">
                        <Sidebar />
                    </div>
                    <div className="p-col-10">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="profile-box">
                                    <div className="p-grid">
                                        <div className="p-col-12" >
                                            <h3>Profile Details</h3>
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
                                        <div className="p-col-12" style={inputBox}>
                                            <div className="p-field" style={bottom}>
                                                <label htmlFor="username1" className="p-d-block">Email Address</label>
                                                <InputText className="p-d-block login-input" placeholder="Email*" />
                                            </div>
                                        </div>

                                        <div className="p-col-6" style={inputBox}>
                                            <div className="p-field" style={bottom}>
                                                <label htmlFor="username1" className="p-d-block">Secondary Email Address</label>
                                                <InputText className="p-d-block login-input" placeholder="Email*" />
                                            </div>
                                        </div>

                                        <div className="p-col-6" style={inputBox}>
                                            <div className="p-field" style={bottom}>
                                                <label htmlFor="username1" className="p-d-block">Mobile Number</label>
                                                <InputText className="p-d-block login-input" placeholder="Mobile Number*" />
                                            </div>
                                        </div>

                                        <div className="p-col-6" style={inputBox}>
                                            <div className="p-field" style={bottom}>
                                                <label htmlFor="username1" className="p-d-block">Password</label>
                                                <InputText className="p-d-block login-input" placeholder="Password*" />
                                            </div>
                                        </div>
                                        <div className="p-col-6" style={inputBox}>
                                            <div className="p-field" style={bottom}>
                                                <label htmlFor="username1" className="p-d-block">Prefered Timing</label>
                                                <InputText className="p-d-block login-input" placeholder="weekend*" />
                                            </div>
                                        </div>

                                        <div className="p-col-6" style={inputBox}>
                                            <div className="p-field" style={bottom}>
                                                <label htmlFor="username1" className="p-d-block">Vissible Name</label>
                                                <InputText className="p-d-block login-input" placeholder="Vissible Name*" />
                                            </div>
                                        </div>

                                        <div className="p-col-6" style={inputBox}>
                                            <div className="p-field" style={bottom}>
                                                <label htmlFor="username1" className="p-d-block">Receive a Reminder email before class statrts</label>
                                                <InputText className="p-d-block login-input" placeholder="30mins" />
                                            </div>
                                        </div>

                                        <div className="p-col-5">
                                        </div>
                                        <div className="p-col-6">
                                            <Link to="/parent-student/parent-login" style={{ textDecoration: 'none' }}>
                                                <Button label="Save" className="p-button-warning" style={{ color: 'white', width: '150px' }} />
                                            </Link>
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