import React, {Component, useState} from 'react';
import { FaRegUser ,FaCaretDown,FaCaretUp} from 'react-icons/fa';
import Redirect from "react-router-dom/es/Redirect";
import './Dashboard.css';
import {FacebookIcon, LinkedinIcon, TwitterIcon} from "react-share";
import {FaRegCopyright} from "react-icons/fa"


class Dashboard extends Component {
    constructor(props)
    {
        super(props);
        this.state = {email:"",name:"",imageurl:"",count:0,a:[],openModal:"",openDropDown:false,googleId:this.props.location.state.googleId}
    }
    render() {
        return (
            <div>
                {this.state.googleId.length > 0 ?
                    <div>
                        <div className={"dashboard-title-bar"}>
                            <div className={"dashboard-title"}>Dashboard</div>
                            <div className={"title-bar-icon"} onClick={()=>{this.setState((prevState)=>({openDropDown:!prevState.openDropDown}))}}>
                                <FaRegUser className={"user-icon"}/>
                                {!this.state.openDropDown ? <FaCaretDown className={"down-icon"} /> : <FaCaretUp className={"up-icon"}/> }
                            </div>
                            {this.state.openDropDown ? <DropDown /> : null }
                        </div>
                        <div style={{paddingTop:"55px"}}/>
                        <div className={"file-export"}>
                            <input type={"file"} className={"file-export-button"} onChange={(e)=>this.change(e)}/>
                            {/*<button className={"submit-button"}>Submit</button>*/}
                        </div>
                        <div className={"image-div"}>
                            {/*<img src={Pic1} className={"images-file"}/>*/}
                            {/*<img src={Pic2} className={"images-file"}/>*/}
                            {/*<img src={Pic3} className={"images-file"}/>*/}
                        </div>
                        <div className={"footer-title-page"}>
                            <div className={"footer-setting-title-page"}>
                                Contact us at:<br/>
                                <a href={"https://www.facebook.com/utkarsh.gupta.3958"}><FacebookIcon size={32} round={true} /></a>
                                <a href={"https://www.linkedin.com/in/utkarsh-gupta-263017138/"}><TwitterIcon  size={32} round={true} /></a>
                                <a href={"https://www.linkedin.com/in/utkarsh-gupta-263017138/"}><LinkedinIcon size={32} round={true} /></a>
                                <br/>
                                <FaRegCopyright /> ABES-EC | All Rights Reserved
                            </div>
                        </div>
                    </div>
                    :<Redirect  to="/" />
                }
            </div>
        );
    }
}

export default Dashboard;

const DropDown = () => {
    const [logoutButton,setLogout] = useState(false);
    const [profileButton,setProfile] = useState(false);
    const logout = ()=>{
        setLogout(!logoutButton);
    };
    const profile = ()=>{
        setProfile(!profileButton);
    };
    return (
        <div className={"drop-down"}>
            <div className={"drop-down-menu"} onClick={()=>profile()}>Profile</div>
            <hr/>
            <div className={"drop-down-menu"} onClick={()=>logout()}>Logout</div>
            {profileButton ? <Redirect to={"/profile"} />:null}
            {logoutButton ? <Redirect to={"/"} />:null}
        </div>
    );
};