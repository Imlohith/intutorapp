import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

import Logo from '../assets/img/logo-1.jpg'


export default class RoutComponent extends Component {
    render() {
        const box = {   
                        width:'100%', 
                        textAlign:'center',
                        padding: '20px', 
                        boxShadow:'10px 10px 5px silver', 
                        margin:'20px',
                        borderRadius: '10px',
                        textDecoration:'none', 
                        color :'#17A2C9', 
                        border:'2px solid #17A2C9',
                        fontWeight:'600'
                    }

        return (
            <>
                    <div style={{ textAlign: 'center', padding: '100px' }}>
                        <img alt="images" src={Logo} height="100px"></img>
                        <div style={{width:'50%', display:'flex',margin:'100px auto'}}>
                            <Link to='parent-student' style={box}>
                                Parent Login
                            </Link>
                            <Link to='tutor' style={box}>
                                Tutor Login
                            </Link>
                        </div>
                    </div> 
            </>
        );
    }
}