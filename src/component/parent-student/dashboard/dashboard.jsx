import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';

//Other pages
import Menu from '../common/menu/menuHome'
import Sidebar from '../common/sidebar/sidebar'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            classes: [1, 2, 3, 4, 5, 6, 7]
        }
    }

    render() {

        const fontSize = { 'fontSize': '1.5em' }

        return (
            <>
                <Menu />
                <div className="p-grid container-main">
                    <div className="p-col-2">
                        <Sidebar />
                    </div>
                    <div className="p-col-10">
                        <h4 style={{ fontWeight: '200' }}>Overview</h4>
                        <div className="p-grid">
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-users" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">4</span> Active Classes
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-book" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">12</span> Completed Classes
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-user-edit" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">3</span> Scheduled course
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-credit-card" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">$150</span> Wallet Credits
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-align-left" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">2</span> Assignments
                                </div>
                                </Card>
                            </div>
                        </div>

                        <div className="p-grid container-head">
                            <div className="p-col-10">
                                <h5 className="requirements-headline">My Post Requirements</h5>
                            </div>
                            <div className="p-col-2">
                                <Link to="/parent-student/subject-1" style={{ textDecoration: 'none' }}>
                                    <Button label="Add new" className="p-button-warning menu-botton" />
                                </Link>
                            </div>
                        </div>

                        <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                            <TabPanel header="Open Requirement">
                                {this.state.classes.map(data => (
                                    <div key={data}>
                                    <Link to="/parent-student/classes-1" style={{ textDecoration: 'none' }}>
                                    <div className="requirements-box">
                                    <div className="p-grid requirements-box-head">
                                        <div className="p-col-9">
                                            <h6 className="requirements-box-head-text">Immediate Need Physics Tutor for Class 9 -10</h6>
                                        </div>
                                        <div className="p-col-3 requirements-box-head-right">
                                            <p>Posted date 12 April 2021</p>
                                        </div>
                                    </div>
                                    <div className="p-grid requirements-box-body">
                                        <div className="p-col-12 requirements-box-text">
                                            <b>Mode of Tutoring </b>: Online one to One<br></br>
                                            <b>Subject</b> : Physics<br></br>
                                            <b>Class </b> : Class 9-10<br></br>
                                            <b>Requirement Description</b> : My Aunt is finalising a tutor, just checking if we canfind any here
                                        </div>
                                        <div className="p-col-12">
                                            <div className="p-grid">
                                                <div className="p-col-9">
                                                </div>
                                                <div className="p-col-1" style={{padding:'20px 10px'}}>
                                                    Close
                                                </div>
                                                <div className="p-col-2">
                                                    <Button label="View Job Post" className="p-button-warning menu-botton" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </Link>
                                    </div>
                                ))}
                                {/* <Card title="Immediate Need Physics Tutor for Class 9 -10">
                            </Card> */}
                            </TabPanel>
                            <TabPanel header="Closed Requirement">
                                Content II
                        </TabPanel>
                        </TabView>
                    </div>
                </div>
            </>
        )
    }
}