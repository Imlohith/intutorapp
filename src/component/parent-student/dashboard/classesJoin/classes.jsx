import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';

//Other Pages
import Menu from '../../common/menu/menuHome'
import Sidebar from '../../common/sidebar/sidebar'


//Images
import CardImg from '../../../../assets/img/cards.jpg'
import Tutor from '../../../../assets/img/akansha.jpg'

//csss
import 'primeflex/primeflex.css';


export default class Classes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            classes: [1, 2, 3, 4, 5, 6, 7]
        }
    }

    render() {

        return (
            <>
                <Menu />
                <div className="p-grid" style={{ backgroundColor: '#F9FCFE' }}>
                    <div className="p-col-2">
                        <Sidebar />
                    </div>
                    <div className="p-col-10">

                        <div className="p-grid container-head">
                            <div className="p-col-10">
                                <h2 style={{ fontWeight: '600' }}>Immediately Need Physics Tutor for Class 9- 10</h2>
                            </div>
                            <div className="p-col-2">
                                <Link to="/parent-student/tutor-list" style={{ textDecoration: 'none' }}>
                                    <Button label="Find New Class" className="p-button-warning menu-botton" style={{ marginTop: '50px' }} />
                                </Link>
                            </div>
                        </div>
                        <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                            <TabPanel header="Matching Tutor">
                                <div className="p-grid">
                                    {this.state.classes.map(data => (

                                        <div key={data} className="p-col-12 classes-tutor">
                                            <div className="p-grid">
                                                <div className="p-col-2" style={{ textAlign: 'center', paddingTop: '20px' }}>
                                                    <img src={Tutor} className="tutor-img" alt="card" />
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
                                                        <Button label="Book a free Demo" className="p-button-warning" style={{ color: 'white', margin: '10px 20px', fontSize: '0.8rem', width: '90%' }} />
                                                    </Link>
                                                    <Link to="/parent-student/billing" style={{ textDecoration: 'none' }}>
                                                        <Button label="Chat" className="p-button-outlined p-button-warning" style={{ margin: '10px 20px', fontSize: '0.8rem', width: '90%' }} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </TabPanel>
                            <TabPanel header="Softlisted tutors">
                                <div className="p-grid">
                                    {this.state.classes.map(data => (
                                        <div key={data} className="p-col-12">
                                            <Link to="/parent-student/dashboard-1" style={{ textDecoration: 'none' }}>
                                                <Card style={{ width: '90%', marginBottom: '2em', borderRadius: '20px' }}>
                                                    <img src={CardImg} className="card-img" style={{ borderRadius: '20px' }} alt="card" />
                                                    <h4 style={{ fontWeight: '500', color: 'rgba(130, 130, 130,0.8)' }}>Cooking and beaking for Teens: Holiday Cooking</h4>
                                                    <h4 style={{ fontWeight: '500', margin: '0px' }}>Akanksha Chavhan</h4>
                                                    <p style={{ fontWeight: '200', margin: '0px' }}>Class 9-10 | Physics</p>
                                                </Card>
                                            </Link>
                                        </div>

                                    ))}

                                </div>
                            </TabPanel>
                        </TabView>

                    </div>
                </div>
            </>
        )
    }
}