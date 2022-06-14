import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

//Other Pages
import Menu from '../common/menu/menu'
import Footer from '../common/footer/footer'

//images
import CardImg from '../../../assets/img/cards.jpg'
import LifeSkill from '../../../assets/img/life-skill.jpg'



export default class Home extends Component {
    render() {

        return (
            <>
                <Menu />
                <div className="header">
                    <h1>Bringing the fun in learning back!</h1>
                </div>
                <div style={{ backgroundColor: '#FAFAFA' }}>
                    <div className="container-data">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-search"></i>
                            </span>
                            <InputText placeholder="Search" />
                        </div>
                        <br></br>
                        <Button label="Starting this week of later" className="p-button-raised" />  &nbsp;
                        <Button label="Language" className="p-button-outlined" />                   &nbsp;
                        <Button label="Any Class" className="p-button-outlined" />                  &nbsp;
                        <Button label="Any Subject" className="p-button-outlined" />                &nbsp;
                        <Button label="On Time" className="p-button-outlined" />                    &nbsp;
                        <Button label="One One" className="p-button-outlined" />                    &nbsp;
                        <Button label="Date renge" className="p-button-outlined" />                 &nbsp;
                    </div>
                    <p className="border-bottom"></p>
                    <div className="container-data" style={{ fontWeight: '600', textAlign: 'center' }}>
                        <h3 style={{ color: '#787877', fontWeight: '600', textAlign: 'center' }} >Related Courses</h3>
                        <Row>
                            <Col lg={4}>
                                <Card className="home-card">
                                    <img src={CardImg} className="card-img" alt="card" />
                                    <div className="p-grid">
                                        <div className="p-col-10">
                                            <h6 className="card-text">Cooking and beaking for Teens: Holiday Cooking</h6>
                                        </div>
                                        <div className="p-col-2">
                                            <h5 className="card-text">
                                                <i className="pi pi-heart" style={{'fontSize': '1.5em',marginTop:'5px',color:'rgb(38, 178, 233)'}}></i>
                                            </h5>
                                        </div>
                                        <div className="p-col-10">
                                            <h5 className="card-text-sub">Akanksha Chavhan</h5>
                                            <p className="card-text-sub-text">Class 9 - 10 | Physics</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="home-card">
                                    <img src={CardImg} className="card-img" alt="card"/>
                                    <div className="p-grid">
                                        <div className="p-col-10">
                                            <h6 className="card-text">Cooking and beaking for Teens: Holiday Cooking</h6>
                                        </div>
                                        <div className="p-col-2">
                                            <h5 className="card-text">
                                                <i className="pi pi-heart" style={{'fontSize': '1.5em',marginTop:'5px',color:'rgb(38, 178, 233)'}}></i>
                                            </h5>
                                        </div>
                                        <div className="p-col-10">
                                            <h5 className="card-text-sub">Akanksha Chavhan</h5>
                                            <p className="card-text-sub-text">Class 9 - 10 | Physics</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="home-card">
                                    <img src={CardImg} className="card-img" alt="card"/>
                                    <div className="p-grid">
                                        <div className="p-col-10">
                                            <h6 className="card-text">Cooking and beaking for Teens: Holiday Cooking</h6>
                                        </div>
                                        <div className="p-col-2">
                                            <h5 className="card-text">
                                                <i className="pi pi-heart" style={{'fontSize': '1.5em',marginTop:'5px',color:'rgb(38, 178, 233)'}}></i>
                                            </h5>
                                        </div>
                                        <div className="p-col-10">
                                            <h5 className="card-text-sub">Akanksha Chavhan</h5>
                                            <p className="card-text-sub-text">Class 9 - 10 | Physics</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Button label="Browse all results" className="p-button-outlined" />
                        <br></br>
                        <br></br>
                        <h3>Chasses you might be interested in</h3>
                        <br></br>
                        <hr></hr>
                        <Link to="/parent-student/dashboard-1" style={{ textDecoration: 'none' }}>
                        <div className="p-grid">
                            <div className="p-col-3">
                                <img src={LifeSkill} className="class-home-img" alt="life" />
                            </div>
                            <div className="p-col-9 class-home-box">
                                <h3>Life Skill: What Trees can teach you if you observe closely</h3>
                                <h5>Akansha Chauhan</h5>
                                <h5>A Lesson from the biology of the trees explained in an interactive way</h5>
                                <div className="p-grid">
                                    <div className="p-col-3 class-home-bottom">Age 13-18</div>
                                    <div className="p-col-3 class-home-bottom">Meet Once Per Week</div>
                                    <div className="p-col-6 class-home-bottom">Next Meet on The Dec 17 at 7.30am Calcutta time</div>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <hr></hr>
                        <Link to="/parent-student/dashboard-1" style={{ textDecoration: 'none' }}>
                        <div className="p-grid">
                            <div className="p-col-3">
                                <img src={LifeSkill} className="class-home-img" alt="life"/>
                            </div>
                            <div className="p-col-9 class-home-box">
                                <h3>Life Skill: What Trees can teach you if you observe closely</h3>
                                <h5>Akansha Chauhan</h5>
                                <h5>A Lesson from the biology of the trees explained in an interactive way</h5>
                                <div className="p-grid">
                                    <div className="p-col-3 class-home-bottom">Age 13-18</div>
                                    <div className="p-col-3 class-home-bottom">Meet Once Per Week</div>
                                    <div className="p-col-6 class-home-bottom">Next Meet on The Dec 17 at 7.30am Calcutta time</div>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}