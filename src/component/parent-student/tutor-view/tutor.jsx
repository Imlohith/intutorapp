import React,{ Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import 'primeflex/primeflex.css';

//other pages
import Menu  from '../common/menu/menu'
import Footer  from '../common/footer/footer'

//images
import CardImg from '../../../assets/img/cards.jpg'

export default class Tutor extends Component {
    render(){
    
        return (
          <>
            <Menu />
            <div style={{backgroundColor:'#FAFAFA'}}>
            <div className="container">
                <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-search"></i>
                            </span>
                            <InputText placeholder="Search" />
                </div>
                {/* <span className="p-float-label">
                    <InputText icon="pi pi-search" placeholder="Search" id="in" style={{width:'100%'}}/>
                </span> */}
                <br></br>
                <Button label="Starting this week of later" className="p-button-raised" /> &nbsp;
                <Button label="Language" className="p-button-outlined" /> &nbsp;
                <Button label="Any Class" className="p-button-outlined" /> &nbsp;
                <Button label="Any Subject" className="p-button-outlined" /> &nbsp;
                <Button label="On Time" className="p-button-outlined" /> &nbsp;
                <Button label="One One" className="p-button-outlined" /> &nbsp;
                <Button label="Date renge" className="p-button-outlined" /> &nbsp;
            </div>
            <p style={{borderBottom:'1px solid #edece8'}}></p>
            <div className="container" style={{ fontWeight:'600',textAlign:'center'}}>
                <h3 style={{color:'#787877', fontWeight:'600',textAlign:'center'}} >Related Courses</h3>
                <div className="p-grid">
                    <div className="p-col-4">
                        <Card style={{ width: '90%', marginBottom: '2em' }}>
                            <img src={CardImg} className="card-img" alt="card" />
                            <h4 style={{fontWeight:'500',color:'#787877'}}>Cooking and beaking for Teens: Holiday Cooking</h4>
                            <h4 style={{fontWeight:'500'}}>Akanksha Chavhan</h4>
                        </Card>
                    </div>
                    <div className="p-col-4">
                        <Card style={{ width: '90%', marginBottom: '2em' }}>
                            <img src={CardImg} className="card-img" alt="card"/>
                            <h4 style={{fontWeight:'500',color:'#787877'}}>Cooking and beaking for Teens: Holiday Cooking</h4>
                            <h4 style={{fontWeight:'500'}}>Akanksha Chavhan</h4>
                        </Card>
                    </div>
                    <div className="p-col-4">
                        <Card style={{ width: '90%', marginBottom: '2em' }}>
                            <img src={CardImg} className="card-img"alt="card" />
                            <h4 style={{fontWeight:'500',color:'#787877'}}>Cooking and beaking for Teens: Holiday Cooking</h4>
                            <h4 style={{fontWeight:'500'}}>Akanksha Chavhan</h4>
                        </Card>
                    </div>
                </div>
                <Button label="Browse all results" className="p-button-outlined" />
                <br></br><br></br><br></br><br></br>
                </div>
                </div>
            <Footer />
            
        </>
        )
    }
}