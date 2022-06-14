import React,{ Component } from 'react'
import { Card } from 'primereact/card';

//Other Pages
import Menu from '../common/menu/menuDashboard'
import Sidebar from '../common/sidebar/sidebar'


import  img1  from '../../../assets/img/ss-1.jpg'
import  img2  from '../../../assets/img/ss-2.jpg'
import  img3  from '../../../assets/img/ss-3.jpg'


export default class UpgradeMember extends Component {

    render(){
        return (
          <>
          <Menu />
          <div className="p-grid" style={{backgroundColor:'#F9FCFE',height:'100vh',paddingRight:'80px'}}>
                <div className="p-col-2">
                    <Sidebar />
                </div>
                <div className="p-col-10">
                    <h1 style={{fontWeight:'200', margin:'10px 0px 30px'}}>Upgrade Membership</h1>
                    <div>
                            <div className="p-grid">
                                <div className="p-col-4">
                                    <Card className="dashboard-card" style={{margin:'0px 30px',padding: '0px'}}>
                                        <img src={img1} style={{width:'100%',height:'500px'}} atl="Standard Plan Reports"/>
                                    </Card>
                                </div>
                                <div className="p-col-4">
                                    <Card className="dashboard-card" style={{margin:'0px 30px',padding: '0px'}}>
                                        <img src={img2} style={{width:'100%',height:'500px'}} alt="Premium Plan"/>
                                    </Card>
                                </div>
                                <div className="p-col-4">
                                    <Card className="dashboard-card" style={{margin:'0px 30px',padding: '0px'}}>
                                        <img src={img3} style={{width:'100%',height:'500px'}} alt="Ultimate Plan"/>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    {/* <div style={{margin:'20px 10px'}}>Invitations</div> */}
                    
                </div>
          </div>
          </>
        )
    }
}