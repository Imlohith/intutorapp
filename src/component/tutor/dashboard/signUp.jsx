import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

//Other Pages
import Menu from '../common/menu/menuSignup'

//Images
import SignUp1 from '../../../assets/img/sign-up-1.jpg'
import SignUp2 from '../../../assets/img/sign-up-2.jpg'



export default class SignUp extends Component {
    render(){
        return (
          <>
          <Menu />
            <div className="p-grid" style={{padding:'200px 0px 100px'}}>
                <div className="p-col-3">
                    <img src={SignUp1} style={{width:'100%'}} alt="left side signup"/>
                </div>
                <div className="p-col-3 sign-up-box">
                    <h3 className="sing-up-title">Student & Parent</h3>
                    <p>Discover amazing teachers, post tution jobs, take enriching courses</p>
                    <Link to="/parent-student/parent-login" style={{textDecoration:'none'}}>
                        <Button label="Sign Up" style={{width:'120px'}} className="p-button-warning menu-botton" />
                    </Link>
                </div>
                <div className="p-col-3" style={{borderLeft:'2px solid silver',height:'300px'}}>
                    <img src={SignUp2} style={{width:'100%'}} alt="right side signup"/>
                </div>
                <div className="p-col-3 sign-up-box">
                    <h3 className="sing-up-title">Tutors & Trainers</h3>
                    <p>Find tution jobs, build your teaching career, teach ofline courses</p>
                    <Link to="/tutor/tutor-sign-up" style={{textDecoration:'none'}}>
                        <Button label="Sign Up" style={{width:'120px'}} className="p-button-warning menu-botton" />
                    </Link>
                </div>
            </div>
            <Link to="/tutor/" style={{textDecoration:'none'}}>
                <div style={{textAlign: 'center', color:'#8f8d8c'}}>
                        Already have an account? <span style={{color:'#ff8800',fontWeight:'700'}}>Login here</span>
                </div>
            </Link>
          </>
        )
    }
}