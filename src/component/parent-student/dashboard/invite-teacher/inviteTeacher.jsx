import React, { Component } from 'react'

//Other Pages
import Menu from '../../common/menu/menuHome'
import Sidebar from '../../common/sidebar/sidebar'

//Images
import Img from '../../../../assets/img/invite-1.png'

export default class InviteTeacher extends Component {
    render() {
        return (
            <>
                <Menu />
                <div className="p-grid" style={{ height: '100vh' }}>
                    <div className="p-col-2">
                        <Sidebar />
                    </div>
                    <div className="p-col-10">
                        <h1 style={{ fontWeight: '200' }}>Invite Teacher</h1>
                        <div style={{ width: '98%', textAlign: 'center' }}>
                            <img src={Img} style={{ width: '40%' }} alt="card" />
                            <h3>Invite Teacher</h3>
                            <p className="invite-share">Share Your invite code</p>
                            <div style={{ backgroundColor: '#D2E9F8', width: '300px', padding: '10px', margin: '0px auto', fontSize: '20px', fontWeight: '700' }}>
                                INTUT-T2424
                            </div>
                            <p className="invite-cash-back">Use your Referral code to get Rs. 500/- Cash Back</p>
                            <p className="invite-text">When a teacher signs up with your referral code, you will receive a cash back after they successfully complte there first transaction and a class</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}