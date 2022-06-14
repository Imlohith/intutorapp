import React, { Component } from 'react'

//Other pages
import Menu from '../common/menu/menuDashboard'
import Sidebar from '../common/sidebar/sidebar'



export default class Classes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            classes: [1, 2, 3, 4, 5, 6, 7]
        }
    }

    render() {

        const pill = { color:'#4DBBD6', marginLeft:'15px', fontWeight:'600', border: '2px solid #4DBBD6', borderRadius:'5px', textAlign: 'center',padding:'10px 15px'}
        const pillFilter = { color:'black', fontWeight:'400', border: '2px solid white', borderRadius:'5px', textAlign: 'center',padding:'10px'}

        return (
            <>
                <Menu />
                <div className="p-grid container-main">
                    <div className="p-col-2">
                        <Sidebar />
                    </div>
                    <div className="p-col-10" style={{padding:'0px 50px 100px 0px'}}>
                        <h3 style={{ fontWeight: '400' }}>Runing Classes List</h3>

                        <div style={{width:'100%',backgroundColor:'white',boxShadow:'0px 0px 10px #edece8', borderRadius:'5px', padding: '10px'}}>
                            <div className="p-grid" style={{width:'100%'}}>
                                <div className="p-col-9">
                                </div>
                                <div className="p-col-3" style={{display: 'flex'}}>
                                    <div style={pillFilter}>
                                        filter By :
                                    </div>
                                    <div style={pill}>
                                        Subject
                                    </div>
                                    <div style={pill}>
                                        Class
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.state.classes.map(data =>(
                        <div key={data}  style={{marginTop:'20px',width:'100%',backgroundColor:'white',boxShadow:'0px 0px 10px #edece8', borderRadius:'5px', padding: '20px 30px'}}>
                            <div className="p-grid">
                                <div className="p-col-6">
                                    <h4 style={{fontWeight:'500',margin:'0px'}}>Low Of Thermodynamic</h4>
                                    <p style={{fontSize: '12px'}}>Class on 24th Dec 2020 2pm</p>
                                    <h4 style={{fontWeight:'400',margin:'20px 0px'}}><i className="pi pi-map-marker"></i> Session type one-one</h4>
                                    <h5 style={{fontWeight:'700',margin:'5px 0px'}}>Description:</h5>
                                    <h5 style={{fontWeight:'400',margin:'5px 0px'}}>This class gives the leaners a deep understanding of the laws of thermodynamics and the governing principles that we apply in our daily lives</h5>
                                    {/* <h5 style={{fontWeight:'400',margin:'5px 0px'}}>For the class of 8th</h5> */}
                                </div>
                                <div className="p-col-5">
                                    <h4 style={{fontWeight:'400',margin:'0px'}}>G Aniridh Class 8th</h4>
                                    <h4 style={{fontWeight:'700',margin:'20px 0px'}}>Subject: <span style={{fontWeight:'400'}}>Physics</span></h4>
                                    <h4 style={{fontWeight:'700',margin:'5px 0px'}}>Topics for which Tutoring is Required:</h4>
                                    <h4 style={{fontWeight:'400',margin:'5px 0px'}}>Thermodyanamics, Gravity, Fraction</h4>
                                    
                                </div>
                                <div className="p-col-1">
                                    <div style={{backgroundColor:'#02A8CE', color:'white', position:'absolute',right: '100px',fontWeight:'500', padding:'7px 20px',borderRadius:'10px'}}>
                                        Edit
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}