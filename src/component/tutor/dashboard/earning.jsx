import React,{ Component } from 'react'
import { Card } from 'primereact/card';

//Other Pages
import Menu from '../common/menu/menuDashboard'
import Sidebar from '../common/sidebar/sidebar'


import  img1  from '../../../assets/img/e-1.jpg'
import  img2  from '../../../assets/img/e-2.jpg'


export default class Earning extends Component {


    render(){
    
        const circle1 = {backgroundColor:'#4DBBD6',height:'50px',width:'50px',borderRadius:'35px',margin: '20px 10px'}
        const circle2 = {backgroundColor:'#FE900E',height:'50px',width:'50px',borderRadius:'35px',margin: '20px 10px'}
        const fontInfo = {fontSize: '0.6em',color:'silver'}

        

        return (
          <>
          <Menu />
          <div className="p-grid" style={{backgroundColor:'#F9FCFE',height:'100vh',paddingRight:'80px'}}>
                <div className="p-col-2">
                    <Sidebar />
                </div>
                <div className="p-col-10">
                    <h1 style={{fontWeight:'200', margin:'10px 0px 30px'}}>Earnings</h1>
                    <div>
                            <div className="p-grid">
                                <div className="p-col-6">
                                    <Card className="dashboard-card" style={{padding: '0px'}}>
                                        {/* <h3 style={{fontWeight:'400', color:'black'}}>Earning Per Month Statistics</h3> */}
                                        <img src={img1} style={{width:'100%',height:'300px'}} />
                                    </Card>
                                </div>
                                <div className="p-col-6">
                                    <Card className="dashboard-card" style={{padding: '0px'}}>
                                        {/* <h3 style={{fontWeight:'400', color:'black'}}>Earning Per Month Statistics</h3> */}
                                        <img src={img2} style={{width:'100%',height:'300px'}}/>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    {/* <div style={{margin:'20px 10px'}}>Invitations</div> */}
                    <div className="p-grid">
                        <div className="p-col-6">
                            <div className="p-grid invitation-box">
                                <div className="p-col-3">
                                    <div style={circle1}>

                                    </div>
                                </div>
                                <div className="p-col-4">
                                    <h3>1</h3>
                                    <p style={fontInfo}>Accepted Invitations</p>
                                </div>
                                <div className="p-col-3">
                                    <h3>3</h3>
                                    <p style={fontInfo}>Sent Invitations</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-6">
                            <div className="p-grid invitation-box">
                                <div className="p-col-3">
                                    <div style={circle2}>

                                    </div>
                                </div>
                                <div className="p-col-4" style={{padding:'10px 0px'}}>
                                    <h5>Earned</h5>
                                    <p style={fontInfo}>Rs 500,00/-</p>
                                </div>
                                <div className="p-col-3" style={{padding:'10px 0px'}}>
                                    <h5>Pending</h5>
                                    <p style={fontInfo}>Rs 250,00/-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    {/* <DataTable value={this.state.customers} paginator header={header} globalFilter={this.state.globalFilter}
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[10,20,50]}
                        paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                        <Column field="name" header="Name"></Column>
                        <Column field="country.name" header="Country"></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="representative.name" header="Representative"></Column>
                    </DataTable> */}
                </div>
          </div>
          </>
        )
    }
}