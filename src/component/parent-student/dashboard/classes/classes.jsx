import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { TabView,TabPanel } from 'primereact/tabview';

//Other Pages
import Menu from '../../common/menu/menuHome'
import Sidebar from '../../common/sidebar/sidebar'

//images
import CardImg from '../../../../assets/img/cards.jpg'

//csss
import 'primeflex/primeflex.css';


export default class Class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            classes : [1,2,3,4,5,6,7]
        }
    }

    render(){
    
        return (
          <>
          <Menu />
          <div className="p-grid" style={{backgroundColor:'#F9FCFE'}}>
                <div className="p-col-2">
                    <Sidebar />
                </div>
                <div className="p-col-10">
                    
                    <div className="p-grid container-head">
                            <div className="p-col-10">
                                <h1 style={{fontWeight:'200'}}>My Classes</h1>
                            </div>
                            <div className="p-col-2">
                                <Link to="/parent-student/home" style={{ textDecoration: 'none' }}>
                                    <Button label="Find New Class" className="p-button-warning menu-botton" style={{marginTop:'50px'}} />
                                </Link>
                            </div>
                        </div>
                    <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
                        <TabPanel header="Scheduled Classes">
                        <div className="p-grid">
                                {this.state.classes.map(data =>(
                                    
                                    <div key={data} className="p-col-4">
                                        <Link to="/parent-student/dashboard-1" style={{ textDecoration: 'none' }}>
                                        <Card style={{ width: '90%', marginBottom: '2em', borderRadius:'20px' }}>
                                            <img src={CardImg} className="card-img" style={{borderRadius:'20px'}}  alt="card"/>
                                            <h4 style={{fontWeight:'500',color:'rgba(130, 130, 130,0.8)'}}>Cooking and beaking for Teens: Holiday Cooking</h4>
                                            <h4 style={{fontWeight:'500',margin:'0px'}}>Akanksha Chavhan</h4>
                                            <p style={{fontWeight:'200',margin:'0px'}}>Class 9-10 | Physics</p>
                                        </Card>
                                        </Link>
                                    </div>
                                    
                                ))}
                            
                        </div>
                        </TabPanel>
                        <TabPanel header="Favourits Classes">
                        <div className="p-grid">
                                {this.state.classes.map(data =>(
                                    
                                    <div key={data} className="p-col-4">
                                        <Link to="/parent-student/dashboard-1" style={{ textDecoration: 'none' }}>
                                        <Card style={{ width: '90%', marginBottom: '2em', borderRadius:'20px' }}>
                                            <img src={CardImg} className="card-img" style={{borderRadius:'20px'}} alt="card" />
                                            <h4 style={{fontWeight:'500',color:'rgba(130, 130, 130,0.8)'}}>Cooking and beaking for Teens: Holiday Cooking</h4>
                                            <h4 style={{fontWeight:'500',margin:'0px'}}>Akanksha Chavhan</h4>
                                            <p style={{fontWeight:'200',margin:'0px'}}>Class 9-10 | Physics</p>
                                        </Card>
                                        </Link>
                                    </div>
                                    
                                ))}
                            
                        </div>
                        </TabPanel>
                        <TabPanel header="Cancelled Classes">
                        <div className="p-grid">
                                {this.state.classes.map(data =>(
                                    
                                    <div key={data} className="p-col-4">
                                        <Link to="/parent-student/dashboard-1" style={{ textDecoration: 'none' }}>
                                        <Card style={{ width: '90%', marginBottom: '2em', borderRadius:'20px' }}>
                                            <img src={CardImg} className="card-img" style={{borderRadius:'20px'}} alt="card" />
                                            <h4 style={{fontWeight:'500',color:'rgba(130, 130, 130,0.8)'}}>Cooking and beaking for Teens: Holiday Cooking</h4>
                                            <h4 style={{fontWeight:'500',margin:'0px'}}>Akanksha Chavhan</h4>
                                            <p style={{fontWeight:'200',margin:'0px'}}>Class 9-10 | Physics</p>
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