import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

//Other pages
import Menu from '../common/menu/menuSignup'

//Css

//Images
import Upload from '../../../assets/img/upload.png'

export default class Student extends Component {
    render(){

        const inputBox = {margin:'10px',padding:'3px'}
    
        return (
          <>
          <Menu />
          <br></br>
            <div className="background">
                <div style={{backgroundColor: 'rgba(233, 242, 245, 0.9)'}}>
                    <div className="container-student">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <h2 style={{textAlign:'center',fontWeight:'500'}}>A <b>Big Hi</b> to your Kid!</h2>
                                <div className="student-box">
                                <div className="p-grid">
                                    <div className="p-col-2">
                                        <img src={Upload}  style={{borderRadius:'10px', width:'100%'}} alt="student" />
                                    </div>
                                    <div className="p-col-10">
                                        <div className="p-grid">
                                            <div className="p-col-5" style={inputBox}>
                                                <InputText className="p-d-block login-input" placeholder="First Name Of Your Child" />
                                            </div>
                                            <div className="p-col-5" style={inputBox}>
                                                <InputText className="p-d-block login-input" placeholder="Last Name Of Your Child" />
                                            </div>
                                            <div className="p-col-5" style={inputBox}>
                                                <InputText className="p-d-block login-input" placeholder="Grade" />
                                            </div>
                                            <div className="p-col-5" style={inputBox}>
                                                <InputText className="p-d-block login-input" placeholder="Gender" />
                                            </div>
                                            <div className="p-col-5" style={inputBox}>
                                                <InputText className="p-d-block login-input" placeholder="Country Of Your Child" />
                                            </div>
                                            <div className="p-col-5" style={inputBox}>
                                                <InputText className="p-d-block login-input" placeholder="Age" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="p-col-12" style={{borderBottom:'1px solid silver',margin:'10px',padding:'3px'}}>
                                        <br></br>
                                    </div>
                                    <div className="p-col-9"></div>
                                    <div className="p-col-3">
                                        <Link to="/parent-student/home" style={{textDecoration:'none'}}>
                                            <Button label="Save Student" className="p-button-warning login-button"  style={{color:'white'}}/>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </>
        )
    }
}