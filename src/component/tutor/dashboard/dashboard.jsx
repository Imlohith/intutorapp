import React, { Component } from 'react'
import { Card } from 'primereact/card';

//Other pages
import Menu from '../common/menu/menuDashboard'
import Sidebar from '../common/sidebar/sidebar'

import  img1  from '../../../assets/img/dd-1.jpg'
import  img2  from '../../../assets/img/dd-2.jpg'

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
                    <div className="p-col-10" style={{padding:'0px 50px 0px 0px'}}>
                        <h1 style={{ fontWeight: '200' }}>Overview</h1>
                        <div className="p-grid">
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-users" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">21</span> Active kids
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-book" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">12</span> Kids Taught
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-user-edit" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">63</span> Hours Taught
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-credit-card" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">$150</span> Lifetime
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-align-left" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">$2</span> Parent Month
                                </div>
                                </Card>
                            </div>
                            <div className="p-col-2">
                                <Card className="dashboard-card">
                                    <i className="pi pi-align-left" style={fontSize}></i>
                                    <div className="dashboard-card-box">
                                        <span className="dashboard-card-count">34</span> Ratings
                                </div>
                                </Card>
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <div className="p-grid">
                                <div className="p-col-6">
                                    <Card className="dashboard-card" style={{padding: '0px'}}>
                                        {/* <h3 style={{fontWeight:'400', color:'black'}}>Earning Per Month Statistics</h3> */}
                                        <img src={img1} style={{width:'100%',height:'300px'}} />
                                    </Card>
                                </div>
                                <div className="p-col-6">
                                    <Card className="dashboard-card" style={{padding: '0px'}}>
                                        {/* <h3 style={{fontWeight:'400', color:'black'}}>Earning Per Month Statistics</h3> */}
                                        <img src={img2} style={{width:'100%',height:'300px'}}/>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}