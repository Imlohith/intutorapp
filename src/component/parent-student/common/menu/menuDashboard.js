import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

//images
import Logo from '../../../../assets/img/logo-2.jpg'

export default class MenuDashboard extends Component {
    render(){

    
        return (
          <>
          <div className="p-grid menu-bar" style={{boxShadow:'0px 0px 10px silver'}}>
                <div className="p-col-6">
                    <img src={Logo} className="menu-logo" alt="logo"/>
                </div>
                <div className="p-col-2 menu-item" style={{textAlign:'right'}}>
                    <span className="menu-text"> Find Classes  &nbsp;<i className="pi pi-angle-down"></i></span>
                </div>
                <div className="p-col-2">
                    <Link to="/parent-student/home" style={{textDecoration:'none'}}>
                        <Button label="Find a Tutor" className="p-button-warning menu-botton" />
                    </Link>
                </div>
                <div className="p-col-1">
                    <Link to="/parent-student/home" style={{textDecoration:'none'}}>
                        <Button label="Login" className="p-button-warning menu-login-botton" />
                    </Link>
                </div>
          </div>
          </>
        )
    }
}