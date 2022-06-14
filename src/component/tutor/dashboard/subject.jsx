import React, { Component } from 'react'

//Other pages
import Menu from '../common/menu/menuDashboard'
import Sidebar from '../common/sidebar/sidebar'



export default class Subject extends Component {

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
                        <h1 style={{ fontWeight: '200' }}>Subject</h1>
                    </div>
                </div>
            </>
        )
    }
}