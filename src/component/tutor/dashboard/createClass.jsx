import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

//Other Pages
import Menu from '../common/menu/menuDashboard'
import Sidebar from '../common/sidebar/sidebar'




export default class CreateClass extends Component {

    
    render(){
        const inputBox = {margin:'3px 0px',padding:'3px'}

        const bottom = {marginBottom: '0rem'}
    
        return (
          <>
          <Menu />
          <div className="p-grid" style={{backgroundColor:'#F9FCFE',height:'auto'}}>
                <div className="p-col-2">
                    <Sidebar />
                </div>
                <div className="p-col-10">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="profile-box">
                                <div className="p-grid">
                                    <div className="p-col-12" >
                                        <h3>Create Subject / Course</h3>
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Subject Title</label>
                                            <InputText className="p-d-block login-input" placeholder="Type here" />
                                        </div>
                                        
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Type Of Subject / Course *</label>
                                            <InputText className="p-d-block login-input" placeholder="Academic / Co curricular" />
                                        </div>
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Board</label>
                                            <InputText className="p-d-block login-input" placeholder="SSC/ CBSC / Open Course" />
                                        </div>
                                    </div>

                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">Age Group Range</label>
                                            <InputText className="p-d-block login-input" placeholder="15-18" />-
                                        </div>
                                    </div>
                                    
                                    <div className="p-col-6" style={inputBox}>
                                        <div className="p-field" style={bottom}>
                                            <label htmlFor="username1" className="p-d-block">For Class</label>
                                            <InputText className="p-d-block login-input" placeholder="One Time" />
                                        </div>
                                    </div>
                                    
                                    <div className="p-col-5">
                                    </div>
                                    <div className="p-col-6">
                                        <Link to="/parent-student/parent-login" style={{textDecoration:'none'}}>
                                            <Button label="Save" className="p-button-warning" style={{color:'white',width:'150px'}} />
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