import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import Menu from '../common/menu/menuSignup'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

//Css
//Images
// import Billing from '../../../assets/img/bill.jpg'
import Payment from '../../../assets/img/payment.jpg'

export default class Billing extends Component {
    render(){

        const inputBox = {margin:'0px',padding:'10px 20px'}
    
        return (
          <>
          <Menu />
          <br></br>
            <div className="background">
                <div style={{backgroundColor: 'rgba(145, 179, 243, 0.2)'}}>
                    
                    <div className="container-bill">
                        <div className="p-grid">
                            <div className="p-col-7">
                                <div className="subject-box">
                                <div className="p-grid" style={{textAlign:"left",marginLeft:'50px'}}>
                                    <div className="p-col-12" >
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="p-col-5" style={inputBox}>
                                        <InputText className="p-d-block login-input" placeholder="Enter Firstname" />
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <InputText className="p-d-block login-input" placeholder="Enter Lastname" />
                                    </div>
                                    <div className="p-col-11" style={inputBox}>
                                        <InputText className="p-d-block login-input" placeholder="Enter Mobile" />
                                    </div>
                                    <div className="p-col-11" style={inputBox}>
                                        <InputText className="p-d-block login-input" placeholder="Enter Address" />
                                    </div>
                                    <div className="p-col-11" style={inputBox}>
                                        <InputText className="p-d-block login-input" placeholder="Enter State" />
                                    </div>
                                    <div className="p-col-11" style={inputBox}>
                                        <InputText className="p-d-block login-input" placeholder="Enter Zip" />
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                            <div className="p-col-4">
                                    {/* <img src={Billing}  style={{margin: '0px 100px', borderRadius:'10px'}} alt="billing"/> */}
                            </div>
                            <div className="p-col-7">
                                <div style={{backgroundColor:'white',borderRadius:'10px'}}>
                                    <div style={{textAlign:"left",padding:'20px 50px 0px'}}>
                                        <h3>Payment Method</h3>
                                    </div>
                                    <img src={Payment}  style={{margin: '0px 50px', width:'80%', }} alt="payment" />
                                    
                                    <Link to="/parent-student/success" style={{ textDecoration: 'none', margin: '50px 50px', }}>
                                        <Button label="Submit" className="p-button-warning" style={{color:'white',padding:'20px',margin:'10px 20px 100px', width:'80%'}} />
                                    </Link>
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