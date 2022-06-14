import React, { Component } from 'react'
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

//Other Pages
import Menu from '../common/menu/menu'
import Footer from '../common/footer/footer'

//images
import Tutor from '../../../assets/img/akansha.jpg'



export default class TutorList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            classes: [1, 2, 3, 4]
        }
    }

    render() {

        return (
            <>
                <Menu />
                <div style={{ backgroundColor: '#F9FCFE' }}>
                    <br></br><br></br>
                    <div style={{width:'90%',margin:'10px auto'}}>
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="p-grid"> 
                                    <div className="p-col-3 tutor-filter">
                                        <h5>I Want to Learn</h5>
                                        <h4>Physics</h4>
                                    </div>
                                    <div className="p-col-3 tutor-filter">
                                        <h5>Class and Course</h5>
                                        <h4>Class 9-10</h4>
                                    </div>
                                    <div className="p-col-3 tutor-filter">
                                        <h5>I Am Looking For</h5>
                                        <h4>One to one video session</h4>
                                    </div>
                                    <div className="p-col-3 tutor-filter">
                                        <h5>Language</h5>
                                        <h4>English</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-8">
                            {this.state.classes.map(data => (
                                <Link key={data} to="/tutor-info" style={{ textDecoration: 'none' }}>
                                <div className="classes-tutor" style={{backgroundColor:'white',padding:'10px',boxShadow:'0px 0px 10px #f2f2f2', marginBottom:'20px'}}>
                                            <div className="p-grid">
                                                <div className="p-col-2" style={{ textAlign: 'center', paddingTop: '20px' }}>
                                                    <img src={Tutor} className="tutor-img" alt="tutor"/> 
                                                    <br></br>
                                                    <br></br>
                                                    <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i> &nbsp;
                                                    <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                                    <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                                    <i className="pi pi-star" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                                    <i className="pi pi-star-o" style={{'fontSize': '1em', color:'#FFC107'}}></i>&nbsp;
                                                </div>
                                                <div className="p-col-8">
                                                    <h3 className="tutor-name"> Akansha Chauhan <i className="pi pi-check-circle" style={{ color: '#2feb35' }}></i></h3>
                                                    <p className="tutor-qlt">M.Sc | 7 Year Experience </p>
                                                    <p className="tutor-desc"> <b><i className="pi pi-book" style={{ 'fontSize': '0.8em', color: 'black' }}></i> </b> Physics Chemistry Biology</p>
                                                    <p className="tutor-desc"><i className="pi pi-map-marker" style={{ 'fontSize': '0.8em', color: 'black' }}></i>  Hyderabad</p>
                                                    <p className="tutor-desc">
                                                        <b>Teaching</b>: Class 9-10, Class 11-12
                                                </p>
                                                    <p className="tutor-desc">
                                                        <b>Available for</b>: Online One to One , Home Tution, Group Video Class
                                                </p>
                                                    <p className="tutor-desc">
                                                        <b>Improve your Physics with the right kind of tutor</b>: I have 25 Years of Experience of teaching Physics. I can Help you take your Physics to the Next level. This is what you Exactly Need
                                                </p>
                                                </div>
                                                <div className="p-col-2" style={{textAlign:"center"}}>
                                                    <br></br>
                                                    <br></br>
                                                    <h5 className="tutor-desc">
                                                        <b>Rs. 2150 </b> <span style={{fontSize:'0.7rem'}}>per week</span>
                                                    </h5>
                                                    <span style={{fontSize:'0.7rem',color:'#d11d3b'}}>
                                                        40% off | Use INTUTORS40
                                                    </span>
                                                    <Link to="/parent-student/dashboard-1" style={{ textDecoration: 'none' }}>
                                                        <Button label="Book a free Demo" className="p-button-warning" style={{ color: 'white', margin: '10px 20px', fontSize: '0.6rem', width: '90%' }} />
                                                    </Link>
                                                    <Link to="/parent-student/billing" style={{ textDecoration: 'none' }}>
                                                        <Button label="Chat" className="p-button-outlined p-button-warning" style={{ margin: '10px 20px', fontSize: '0.6rem', width: '90%' }} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                            ))}
                            </div>
                            <div className="p-col-4">
                                <div style={{backgroundColor:'white',padding:'10px',boxShadow:'0px 0px 10px #f2f2f2', marginBottom:'20px'}}>
                                    <h4 style={{textAlign:'center',color:'#757373',margin:'5px'}}>Tutor Intro</h4>

                                    <iframe id="player" type="text/html" width="100%" height="200" title="Tutor Intro"
                                    src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                                    frameBorder="0"></iframe>

                                    <h6 style={{textAlign:'center',color:'#757373'}}>Book a trial lesson with Akansha Chauhan</h6>

                                    <div className="Schedule">
                                        <div className="p-grid">
                                            <div className="p-col-3"></div>
                                            <div className="p-col-9">
                                                <div className="p-grid">
                                                    <div className="p-col-2 s-head">
                                                        Mon
                                                    </div>
                                                    <div className="p-col-1 s-head">
                                                        Tue
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        Web
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        Thus
                                                    </div>
                                                    <div className="p-col-1 s-head">
                                                        Fri
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        Sat
                                                    </div>
                                                    <div className="p-col-1 s-head">
                                                        Sun
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-col-3">
                                                <h6 className="s-name">Morning</h6>
                                                <p className="s-time">06:00 - 12:00</p>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="p-grid">
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head-color-1">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            

                                            <div className="p-col-3">
                                                <h6 className="s-name">Afternoon</h6>
                                                <p className="s-time">12:00 - 18:00</p>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="p-grid">
                                                    <div className="p-col-2 s-head-color-1">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head-color-2">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head-color-1">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head">
                                                        
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="p-col-3">
                                                <h6 className="s-name">Evening</h6>
                                                <p className="s-time">18:00 - 24:00</p>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="p-grid">
                                                    <div className="p-col-2 s-head-color-2">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head-color-1">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head-color-1">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head-color-1">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head-color-2">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head-color-1">
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-col-3">
                                                <h6 className="s-name">Night</h6>
                                                <p className="s-time">00:00 - 06:00</p>
                                            </div>
                                            <div className="p-col-9">
                                                <div className="p-grid">
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head-color-1">
                                                        
                                                    </div>
                                                    <div className="p-col-2 s-head-color-1">
                                                        
                                                    </div>
                                                    <div className="p-col-1 s-head-color-2">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        
                                    </div>
                                </div>
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