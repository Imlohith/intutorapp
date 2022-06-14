import React,{ Component } from 'react'

//other pagess
import Menu from '../common/menu/menuSignup'

export default class Success extends Component {
    render(){
        const circle1 = {backgroundColor:'silver',height:'60px',width:'60px',borderRadius:'35px',margin: '20px 50px'}

        const inputBox = {margin:'0px',padding:'3px'}
    
        return (
          <>
           <Menu />
           <br></br><br></br><br></br>
            <div className="background">
                <div style={{backgroundColor: 'rgba(145, 179, 243, 0.2)'}}>
                   <br></br><br></br>
                    <div className="container-success">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="success-box">
                                <div className="p-grid">
                                    <div className="p-col-4" style={inputBox}>
                                        <div style={circle1}>
                                        </div>
                                    </div>
                                    <div className="p-col-8">
                                        <h3>Thermodynamic</h3>
                                        <p>Akasnkha Chavhan</p>
                                    </div>
                                    <div className="p-col-12 success-date-text" style={inputBox}>
                                        Date and Time
                                    </div>
                                    <div className="p-col-12" style={inputBox}>
                                        Thuersday 19 December, 01:30
                                    </div>
                                    <div className="p-col-12 success-date-text" style={inputBox}>
                                        FTM + 5:40
                                    </div>
                                    <div className="p-col-12" style={{borderTop:'1px solid silver',marginTop:'20px'}} ></div>
                                    <div className="p-col-6 success-date-text" style={inputBox}>
                                        Service Details
                                    </div>
                                    <div className="p-col-6 success-right-head-text" style={inputBox}>
                                        Price Per Hour
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        <p>1 Hour Lesson</p>
                                        
                                    </div>
                                    <div className="p-col-6 success-right-text" style={inputBox}>
                                        Rs. 700/-
                                    </div>
                                    <div className="p-col-6" style={inputBox}>
                                        
                                        <p>Wallet Balence</p>
                                    </div>
                                    <div className="p-col-6 success-right-wallet-text" style={inputBox}>
                                        Rs. -500/-
                                    </div>
                                    <div className="p-col-12" style={{borderTop:'1px solid silver'}} ></div>
                                    <div className="p-col-6" style={inputBox} >
                                        Total
                                    </div>
                                    <div className="p-col-6 success-right-text" style={inputBox}>
                                        Rs. 200/-
                                    </div>
                                    
                                    <div className="p-col-12" style={inputBox}>
                                        <h2 className="success-head-text">Booking Success</h2>
                                        <p className="success-bottom-text">
                                            Your Free Demo has been booked and the details are sent over to you by email.
                                        </p>
                                        <p className="success-download-text">
                                            Download Invoice
                                        </p>
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