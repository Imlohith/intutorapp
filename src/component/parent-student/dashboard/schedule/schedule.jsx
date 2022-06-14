import React,{ Component } from 'react'
// import { FullCalendar } from 'primereact/fullcalendar';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';


//Other Pages
import Menu from '../../common/menu/menuHome'
import Sidebar from '../../common/sidebar/sidebar'

//Images
import banner from '../../../../assets/img/banner-1.jpg'


// import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';


export default class Schedule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [
                {"id": 1,"title": "All Day Event","start": "2021-04-01"},
                {"id": 2,"title": "Long Event","start": "2021-04-07","end": "2021-04-10"},
                {"id": 3,"title": "Repeating Event","start": "2021-04-09T16:00:00"},
                {"id": 4,"title": "Repeating Event","start": "2021-04-16T16:00:00"},
                {"id": 5,"title": "Conference","start": "2021-04-11","end": "2021-04-13"},
                {"id": 6,"title": "Meeting","start": "2021-04-12T10:30:00","end": "2021-04-12T12:30:00"},
                {"id": 7,"title": "Lunch","start": "2021-04-12T12:00:00"},
                {"id": 8,"title": "Meeting","start": "2021-04-12T14:30:00"},
                {"id": 9,"title": "Happy Hour","start": "2021-04-12T17:30:00"},
                {"id": 10,"title": "Dinner","start": "2021-04-12T20:00:00"},
                {"id": 11,"title": "Birthday Party","start": "2021-04-13T07:00:00"},
                {"id": 12,"title": "Click for Google","url": "https://www.google.com/","start": "2021-04-28"}
            ]
        };

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
                        {/* <FullCalendar events={this.state.events} options={this.options} /> */}
                    </div>
                </div>
          </div>
          </>
        )
    }
}