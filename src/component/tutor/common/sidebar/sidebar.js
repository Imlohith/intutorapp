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

        const pageUrl ="http://localhost:3000/tutor/"

        const fontSize = { 'fontSize': '1em', marginRight: '10px' }
        const linkStyle = { textDecoration: 'none' }

        return (
            <>
                <div className="sidebar-box">
                    <Link style={linkStyle} to="/tutor/dashboard">
                        <div className={this.state.currentUrl === pageUrl+'dashboard' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Dashboard
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/all-requirement">
                        <div className={this.state.currentUrl === pageUrl+'all-requirement' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> All Requirement
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/classes">
                        <div className={this.state.currentUrl === pageUrl+'classes' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Classes
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/subject">
                        <div className={this.state.currentUrl === pageUrl+'subject' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Subject
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/schedule">
                        <div className={this.state.currentUrl === pageUrl+'schedule' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Schedule
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/assignment">
                        <div className={this.state.currentUrl === pageUrl+'assignment' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Assignment
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/earning">
                        <div className={this.state.currentUrl === pageUrl+'earning' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Earning
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/upgrade-membership">
                        <div className={this.state.currentUrl === pageUrl+'upgrade-membership' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Upgrade Membership
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/invite-teacher">
                        <div className={this.state.currentUrl === pageUrl+'invite-teacher' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Invite Teacher
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/invite-parent">
                        <div className={this.state.currentUrl === pageUrl+'invite-parent' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Invite Parent
                        </div>
                    </Link>
                    <Link style={linkStyle} to="/tutor/help-center">
                        <div className={this.state.currentUrl === pageUrl+'help-center' ? "sidebar-item_active" : "sidebar-item"}>
                            <i className="pi pi-home" style={fontSize}></i> Help center
                        </div>
                    </Link>
                </div>
                
            </>
        )
    }
}