import React,{ Component } from 'react'

//Other Pages
import Menu from '../../common/menu/menuHome'
import Sidebar from '../../common/sidebar/sidebar'

//icons
import FolderIcon from '@material-ui/icons/Folder';

//Images
import Word from '../../../../assets/img/word.png'


export default class Assignment extends Component {
    render(){
        const folderIcon = { color:'silver',padding:'10px 20px'}
    
        const fontInfo = {fontSize: '0.6em',color:'silver'}
        return (
          <>
          <Menu />
          <div className="p-grid container-head">
                <div className="p-col-2">
                    <Sidebar />
                </div>
                <div className="p-col-10">
                    <div className="assignment-box">
                        <div className="p-grid requirements-box-head">
                            <div className="p-col-11">
                                <h4 className="assignment-box-head">Assignments - Upload by Tutor</h4>
                            </div>
                            <div className="p-col-1">
                                <i className="pi pi-plus"></i>
                            </div>
                        </div>
                        <div className="p-grid requirements-box-body">
                            <div className="p-col-3">
                                <div className="p-grid folder">
                                    <div className="p-col-3"  style={folderIcon}>
                                        <FolderIcon fontSize="large"/>
                                    </div>
                                    <div className="p-col-8">
                                        Gravity
                                        <p style={fontInfo}>Updated 3 files</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="p-grid folder">
                                    <div className="p-col-3"  style={folderIcon}>
                                        <FolderIcon fontSize="large"/>
                                    </div>
                                    <div className="p-col-8">
                                        Thermodynamic
                                        <p style={fontInfo}>Updated 19 files</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="p-grid folder">
                                    <div className="p-col-3"  style={folderIcon}>
                                        <FolderIcon fontSize="large"/>
                                    </div>
                                    <div className="p-col-8">
                                        Astro Physics
                                        <p style={fontInfo}>Updated 31 files</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="p-grid folder">
                                    <div className="p-col-3"  style={folderIcon}>
                                        <FolderIcon fontSize="large"/>
                                    </div>
                                    <div className="p-col-8">
                                        Fraction
                                        <p style={fontInfo}>Updated 3 files</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="p-grid folder">
                                    <div className="p-col-3" >
                                        <img src={Word} style={{width:'100%'}} alt="logo"/>
                                    </div>
                                    <div className="p-col-8">
                                        Velocity Assignment
                                        <p style={fontInfo}>267kb</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-3">
                                <div className="p-grid folder">
                                    <div className="p-col-3" >
                                        <img src={Word} style={{width:'100%'}} alt="logo"/>
                                    </div>
                                    <div className="p-col-8">
                                        Momentum
                                        <p style={fontInfo}>556kb</p>
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