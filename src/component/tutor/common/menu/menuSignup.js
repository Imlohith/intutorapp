import React,{ Component } from 'react'

//images
import Logo from '../../../../assets/img/logo-2.jpg'


export default class MenuSignUp extends Component {
    render(){
        return (
          <>
          <div className="p-grid menu-bar" style={{boxShadow:'0px 0px 10px silver'}}>
                <div className="p-col-12" style={{textAlign:'center'}}>
                    <img src={Logo} className="menu-logo" alt="logo"/>
                </div>
          </div>
          </>
        )
    }
}