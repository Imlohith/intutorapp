import React, { Component } from 'react'

//Other pages
import Menu from '../common/menu/menuDashboard'
import Sidebar from '../common/sidebar/sidebar'



export default class HelpCenter extends Component {

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
                <div className="p-grid container-main">
                    <div className="p-col-2">
                        <Sidebar />
                    </div>
                    <div className="p-col-10">
                        
                        <div style={{textAlign:'center'}}>
                            <h1 style={{ fontWeight: '200' }}>How can we help?</h1>
                            <div className="p-grid" style={{background:'white', width:'400px',margin:'20px auto',border: '1px solid #ededed'}}>
                                <div className="p-col-10" style={{textAlign:'left',fontSize:'12px',color:'silver',padding:'5px'}}>
                                    Ask a Question
                                </div>
                                <div className="p-col-2" style={{background:'#02A8CE',color :'white'}}>
                                    <i className="pi pi-search"></i>
                                </div>
                            </div>
                            <div className="p-grid" style={{ width:'700px',margin:'10px auto'}}>
                                <div className="p-col-6" style={{textAlign:'left',fontSize:'12px',color:'silver',padding:'5px'}}>
                                    <div className="p-grid" style={{background:'white',margin:'10px',boxShadow:'0px 0px 10px #ededed'}}>
                                        <div className="p-col-2" style={{background:'#ededed',color :'white',margin:'10px'}}>
                                        </div>
                                        <div className="p-col-9">
                                            <h3 style={{color:'black',fontWeight:'400',marginTop:'5px'}}>Getting Started</h3>
                                            <p>Well organized and easy to understand Web building tutorials with lots</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-6" style={{textAlign:'left',fontSize:'12px',color:'silver',padding:'5px'}}>
                                    <div className="p-grid" style={{background:'white',margin:'10px',boxShadow:'0px 0px 10px #ededed'}}>
                                        <div className="p-col-2" style={{background:'#ededed',color :'white',margin:'10px'}}>
                                        </div>
                                        <div className="p-col-9">
                                            <h3 style={{color:'black',fontWeight:'400',marginTop:'5px'}}>Account</h3>
                                            <p>Well organized and easy to understand Web building tutorials with lots</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-6" style={{textAlign:'left',fontSize:'12px',color:'silver',padding:'5px'}}>
                                    <div className="p-grid" style={{background:'white',margin:'10px',boxShadow:'0px 0px 10px #ededed'}}>
                                        <div className="p-col-2" style={{background:'#ededed',color :'white',margin:'10px'}}>
                                        </div>
                                        <div className="p-col-9">
                                            <h3 style={{color:'black',fontWeight:'400',marginTop:'5px'}}>Data Security</h3>
                                            <p>Well organized and easy to understand Web building tutorials with lots</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-6" style={{textAlign:'left',fontSize:'12px',color:'silver',padding:'5px'}}>
                                    <div className="p-grid" style={{background:'white',margin:'10px',boxShadow:'0px 0px 10px #ededed'}}>
                                        <div className="p-col-2" style={{background:'#ededed',color :'white',margin:'10px'}}>
                                        </div>
                                        <div className="p-col-9">
                                            <h3 style={{color:'black',fontWeight:'400',marginTop:'5px'}}>Market</h3>
                                            <p>Well organized and easy to understand Web building tutorials with lots</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-6" style={{textAlign:'left',fontSize:'12px',color:'silver',padding:'5px'}}>
                                    <div className="p-grid" style={{background:'white',margin:'10px',boxShadow:'0px 0px 10px #ededed'}}>
                                        <div className="p-col-2" style={{background:'#ededed',color :'white',margin:'10px'}}>
                                        </div>
                                        <div className="p-col-9">
                                            <h3 style={{color:'black',fontWeight:'400',marginTop:'5px'}}>Subscription</h3>
                                            <p>Well organized and easy to understand Web building tutorials with lots</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-6" style={{textAlign:'left',fontSize:'12px',color:'silver',padding:'5px'}}>
                                    <div className="p-grid" style={{background:'white',margin:'10px',boxShadow:'0px 0px 10px #ededed'}}>
                                        <div className="p-col-2" style={{background:'#ededed',color :'white',margin:'10px'}}>
                                        </div>
                                        <div className="p-col-9">
                                            <h3 style={{color:'black',fontWeight:'400',marginTop:'5px'}}>Tips, Tricks & More</h3>
                                            <p>Well organized and easy to understand Web building tutorials with lots</p>
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