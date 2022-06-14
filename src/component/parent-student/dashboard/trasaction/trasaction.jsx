import React,{ Component } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

//Other Pages
import Menu from '../../common/menu/menuHome'
import Sidebar from '../../common/sidebar/sidebar'

export default class Trasaction extends Component {

    constructor(props)
    {
        super()
        this.state = {
            globalFilter: null,
            customers : [
                {
                    "id": 1000,
                    "name": "James Butt",
                    "country": {
                    "name": "Algeria",
                    "code": "dz"
                    },
                    "company": "Benton, John B Jr",
                    "date": "2015-09-13",
                    "status": "unqualified",
                    "activity": 17,
                    "representative": {
                    "name": "Ioni Bowcher",
                    "image": "ionibowcher.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                    "name": "Egypt",
                    "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2019-02-09",
                    "status": "proposal",
                    "activity": 0,
                    "representative": {
                    "name": "Amy Elsner",
                    "image": "amyelsner.png"
                    }
                }
            ]
        }
    }


    render(){
    
        const circle1 = {backgroundColor:'#4DBBD6',height:'50px',width:'50px',borderRadius:'35px',margin: '20px 10px'}
        const circle2 = {backgroundColor:'#FE900E',height:'50px',width:'50px',borderRadius:'35px',margin: '20px 10px'}
        const fontInfo = {fontSize: '0.6em',color:'silver'}

        const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
        const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

        const header = (
            <div className="table-header">
                <div className="p-grid">
                        <div className="p-col-9">
                            List of Customers
                        </div>
                        <div className="p-col-3">
                            <span className="p-input-icon-left">
                                <i className="pi pi-search" />
                                <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Search" />
                            </span>
                        </div>
                    </div>
                
                
            </div>
        );

        return (
          <>
          <Menu />
          <div className="p-grid" style={{backgroundColor:'#F9FCFE',height:'100vh'}}>
                <div className="p-col-2">
                    <Sidebar />
                </div>
                <div className="p-col-10">
                    <h1 style={{fontWeight:'200', margin:'10px 0px'}}>Transactions</h1>
                    <div style={{margin:'20px 10px'}}>Invitations</div>
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
                    <DataTable value={this.state.customers} paginator header={header} globalFilter={this.state.globalFilter}
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[10,20,50]}
                        paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                        <Column field="name" header="Name"></Column>
                        <Column field="country.name" header="Country"></Column>
                        <Column field="company" header="Company"></Column>
                        <Column field="representative.name" header="Representative"></Column>
                    </DataTable>
                </div>
          </div>
          </>
        )
    }
}