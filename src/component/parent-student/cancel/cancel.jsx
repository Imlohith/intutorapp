import React,{ Component } from 'react'
import Menu from '../common/menu/menuSignup'

export default class CancelComponent extends Component {
    render(){
        const circle1 = {backgroundColor:'silver',height:'60px',width:'60px',borderRadius:'35px',margin: '20px 50px'}

        const inputBox = {margin:'0px',padding:'3px'}
    
        return (
          <>
          <Menu />
          <br></br><br></br>
            <div className="background">
                <div style={{backgroundColor: 'rgba(145, 179, 243, 0.2)'}}>
                    
                    <div className="container-cancel">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="cancel-box">
                                <div className="p-grid">
                                    <div className="p-col-4" style={inputBox}>
                                        <div style={circle1}>
                                        </div>
                                    </div>
                                    <div className="p-col-8">
                                        <h3>Thermodynamic</h3>
                                        <p>Akasnkha Chavhan</p>
                                    </div>
                                    <div className="p-col-12 cancel-date-text" style={inputBox}>
                                        Date and Time
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        Thuersday 19 December, 01:30
                                    </div>
                                    <div className="p-col-12 cancel-date-text" style={inputBox}>
                                        FTM + 5:40
                                    </div>
                                    <div className="p-col-12"><br></br></div>
                                    <div className="p-col-6 cancel-date-text" style={inputBox}>
                                        Service Details
                                    </div>
                                    <div className="p-col-6 cancel-right-head-text" style={inputBox}>
                                        Price Per Hour
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <p>1 Hour Lesson</p>
                                        <p>Refund Eligible 100%</p>
                                    </div>
                                    <div className="p-col-6 cancel-right-text" style={inputBox}>
                                        Rs. 700/-
                                    </div>
                                    <div className="p-col-12"><br></br></div>
                                    <div className="p-col-6" style={inputBox}>
                                        Refund Total
                                    </div>
                                    <div className="p-col-6 cancel-right-text" style={inputBox}>
                                        Rs. 700/-
                                    </div>
                                    
                                    <div className="p-col-12" style={inputBox}>
                                        <h2 className="cancel-head-text">Booking Cancellation</h2>
                                        <p className="cancel-bottom-text">Your Class will be cancelled and the details are sent over to you by email</p>
                                    </div>
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