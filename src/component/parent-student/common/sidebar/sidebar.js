import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class RoutComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUrl: window.location.href
        }
    }

    render() {

        console.log(this.state.currentUrl)

        const pageUrl ="http://localhost:3000/parent-student/"

        const fontSize = { 'fontSize': '1em', marginRight: '10px' }
        const linkStyle = { textDecoration: 'none' }

        return (
            <>
                <div className="sidebar-box">
                    <Link style={linkStyle} to="/parent-student/dashboard">
                        <div className={this.state.currentUrl === pageUrl+'dashboard' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Dashboard
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/parent-student/classes">
                        <div className={this.state.currentUrl === pageUrl+'classes' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-desktop" style={fontSize}></i> Classes
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/parent-student/schedule">
                        <div className={this.state.currentUrl === pageUrl+'schedule' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-comments" style={fontSize}></i> Schedule
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/parent-student/assignments">
                        <div className={this.state.currentUrl === pageUrl+'assignments' ? "sidebar-item_active" : "sidebar-item"}>
                        <i className="pi pi-book" style={fontSize}></i> Assignments
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/parent-student/credits">
                        <div className={this.state.currentUrl === pageUrl+'credits' ? "sidebar-item_active" : "sidebar-item"}>
                        <i className="pi pi-wallet" style={fontSize}></i> Credits
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/parent-student/transaction">
                        <div className={this.state.currentUrl === pageUrl+'transaction' ? "sidebar-item_active" : "sidebar-item"}>
                        <i className="pi pi-money-bill" style={fontSize}></i> Transactions
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/parent-student/invite-teacher">
                        <div className={this.state.currentUrl === pageUrl+'invite-teacher' ? "sidebar-item_active" : "sidebar-item"}>
                        <i className="pi pi-envelope" style={fontSize}></i> Invite Teacher
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/parent-student/invite-parent">
                        <div className={this.state.currentUrl === pageUrl+'invite-parent' ? "sidebar-item_active" : "sidebar-item"}>
                        <i className="pi pi-directions-alt" style={fontSize}></i> Invite Parent
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/parent-student/setting">
                        <div className={this.state.currentUrl === pageUrl+'setting' ? "sidebar-item_active" : "sidebar-item"}>
                        <i className="pi pi-cog" style={fontSize}></i> Settings
                        </div>
                    </Link>
                </div>
            </>
        )
    }
}