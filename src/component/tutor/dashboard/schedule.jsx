import React,{ Component } from 'react'
// import { FullCalendar } from 'primereact/fullcalendar';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';


//Other Pages
import Menu from '../common/menu/menuDashboard'
import Sidebar from '../common/sidebar/sidebar'


//Images
import banner from '../../../assets/img/banner-1.jpg'


// import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';


export default class Schedule extends Component {

    constructor(props) {
        super(props);

        this.state = {}

        // this.options = {
        //     plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        //     defaultView: 'dayGridMonth',
        //     defaultDate: '2021-04-04',
        //     header: {
        //         left: 'prev,next',
        //         center: 'title',
        //         right: 'dayGridMonth,timeGridWeek,timeGridDay'
        //     },
        //     editable: true
        // };

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
                    <h1 style={{fontWeight:'200'}}>Schedule</h1>
                    <img src={banner} style={{width:'95%', borderRadius:'50px', marginBottom:'20px',height:'200px'}} alt="banner"/>
                    {/* <Calendar  inline showWeek /> */}
                    <div className="card" style={{backgroundColor: 'white', width:'95%',boxShadow:'0px 0px 10px silver',padding:'10px 50px'}}>
                        {/* <FullCalendar /> */}
                    </div>
                </div>
          </div>
          </>
        )
    }
}