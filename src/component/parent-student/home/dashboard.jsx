import React, { Component } from 'react'
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

//Other Pages
import Menu from '../common/menu/menu'
import Footer from '../common/footer/footer'

//images
import CardImg from '../../../assets/img/cards.jpg'
import Tutor from '../../../assets/img/akansha.jpg'



export default class Dashboard extends Component {
    render() {

        return (
            <>
                <Menu />
                <div style={{ backgroundColor: '#FAFAFA' }}>
                    <br></br><br></br>
                    <div className="container">
                        <div className="p-grid">
                            <div className="p-col-4">
                                <img src={CardImg} className="card-img" alt="card"/>
                            </div>
                            <div className="p-col-6">
                                <h1 className="dashboard-title-text">
                                    Cooking and Baking For Teens: <br></br>
                                    Holiday Cookies
                                </h1>
                                <p className="dashboard-title-sub-text">
                                    Dropdowns are toggleable, contextual overlays for displaying lists of links and more. Like overlays, Dropdowns are built using a third-party library Popper.js, which provides dynamic positioning and viewport detection.
                                </p>
                                <div>
                                    <Link to="/parent-student/billing" style={{ textDecoration: 'none' }}>
                                        <Button label="Book a free Demo" className="p-button-warning" style={{color:'white',margin:'10px 20px'}} />
                                    </Link>
                                    <Link to="/parent-student/billing" style={{ textDecoration: 'none' }}>
                                        <Button label="Chat" className="p-button-outlined p-button-warning" style={{margin:'10px 20px'}} />
                                    </Link>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="dashboard-pills">
                                    <h3>30 Minutes</h3>
                                    <p>Class Duration</p>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="dashboard-pills">
                                    <h3> 3 - 13</h3>
                                    <p>Group Size</p>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="dashboard-pills">
                                    <h3> Age 13-18</h3>
                                    <p>Age renge</p>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="dashboard-pills">
                                    <h3> $10 Per Week</h3>
                                    <p>Price per learner</p>
                                </div>
                            </div>
                            <div className="p-col-12">
                                <br></br>
                                <br></br>
                            </div>
                            <div className="p-col-2">
                                <img src={Tutor} className="tutor-img" alt="tutor"/>
                            </div>
                            <div className="p-col-5">
                                <h3 className="designation"> Tutor</h3>
                                <h3 className="tutor-name"> Akansha Chauhan </h3>
                                <p  className="tutor-qlt">M.Sc | 7 Year Experience <i className="pi pi-book" style={{'fontSize': '0.8em'}}></i>  Physics Chemistry Biology</p>
                                <p  className="tutor-desc">
                                    <b>About Me </b>: I have 25 Years of Experience of teaching Physics. I can Help you take your Physics to the Next level. This is what you Exactly Need
                                </p>
                            </div>
                            <div className="p-col-12">
                                <h1 className="rating-review">Rating and Reviews</h1>
                            </div>
                            <div className="p-col-12" style={{padding:'0px 60px'}}>
                                <h1 className="rating-total"> 4 Reviews  &nbsp;&nbsp;&nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>  &nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i> &nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i> &nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i> &nbsp;
                                <i className="pi pi-star-o" style={{'fontSize': '1em', color:'#FFC107'}}></i> &nbsp;
                                </h1>
                            </div>
                            <div className="p-col-12" style={{padding:'0px 60px'}}>
                                <h1 className="rating-date"> <i className="pi pi-chevron-circle-right" style={{'fontSize': '1em'}}></i> 
                                    <span  className="rating-user"> Nilam K </span>on Jan 13  
                                </h1>
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i> &nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                <p>
                                Color shades, tints and tones are created by adding black, white and gray respectively to a chosen color. They can be very useful in web design for backgrounds
                                </p>
                            </div>
                            <div className="p-col-12" style={{padding:'0px 130px'}}>
                                <h1 className="rating-date"> <i className="pi pi-chevron-circle-up" style={{'fontSize': '1em'}}></i> 
                                    <span  className="rating-user"> Akasnha Chauhan </span>on Jan 13  
                                </h1>
                                <p>
                                Color shades, tints and tones are created by adding black, white and gray respectively to a chosen color. They can be very useful in web design for backgrounds
                                </p>
                            </div>
                            <div className="p-col-12" style={{padding:'0px 60px'}}>
                                <h1 className="rating-date"> <i className="pi pi-chevron-circle-right" style={{'fontSize': '1em'}}></i> 
                                    <span  className="rating-user"> Nilam K </span>on Jan 13  
                                </h1>
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i> &nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                <i className="pi pi-star-o" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                <p>
                                Color shades, tints and tones are created by adding black, white and gray respectively to a chosen color. They can be very useful in web design for backgrounds
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <p className="border-bottom"></p> */}
                    <br></br><br></br><br></br><br></br><br></br>
                </div>
                <br></br>
                <Footer />
            </>
        )
    }
}