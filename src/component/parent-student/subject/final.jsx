import React,{ Component } from 'react'

//Other pages
import Menu from '../common/menu/menuSignup'

//Css

export default class Final extends Component {
    render(){
    
        return (
          <>
          <Menu />
            <br></br>
            <div className="background">
                <div style={{backgroundColor: 'rgba(145, 179, 243, 0.2)'}}>
                    <div className="container-otp">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="subject-final-box">
                                <div className="p-grid">
                                    <div className="p-col-12">
                                        <h3 className="subject-final-text">Your requirement has been posted successfully</h3>
                                    </div>
                                    <div className="p-col-12">
                                        <h3 className="subject-final-text">You will be redirected to the matching profiles in a moment :)</h3>
                                    </div>
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