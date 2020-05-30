import React, {Component, useState} from 'react';
import { FaRegUser ,FaCaretDown,FaCaretUp} from 'react-icons/fa';
import Redirect from "react-router-dom/es/Redirect";
import './Dashboard.css';
import {FacebookIcon, LinkedinIcon, TwitterIcon} from "react-share";
import {FaRegCopyright} from "react-icons/fa";
import { storage } from "../../Firebase";
import ReactPlayer from 'react-player'

class Dashboard extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            type:"",progress:0,url:"",email:"",name:"",imageurl:"",count:0,a:[],openModal:"",openDropDown:false,googleId:this.props.location.state.googleId,file:null,imageSet:[]
        }
    }
    change = (e)=>{
        let typeSeprator = e.target.files[0].type;
        let seprator = typeSeprator.split('/')[0];
        this.setState({file:e.target.files[0],type:seprator});
    }

    saveImage = ()=>{
        if(this.state.file)
        {
            const uploadTask = storage.ref(`${this.state.googleId}/images/${this.state.file.name}`).put(this.state.file);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    this.setState({progress});
                },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref(`${this.state.googleId}/images`)
                        .child(this.state.file.name)
                        .getDownloadURL()
                        .then(url => {
                            console.log(url)
                            let data = this.state.imageSet;
                            const dataSet = {
                                url:url,
                                type:this.state.type
                            }
                            data.push(dataSet)
                            this.setState({imageSet:data});
                            this.setState({url:url,file:null,progress:0});
                        });
                }
            );
        }
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
                            <progress value={this.state.progress} max={"100"}  style={{width:"100%"}}/>
                            <input type={"file"} className={"file-export-button"} onChange={(e)=>this.change(e)}/>
                            <button className={"submit-button"} onClick={this.saveImage}>Submit</button>
                        </div>
                        <div style={{paddingTop:"65px"}} />
                        {this.state.imageSet.length>0 ?
                            <div style={{display:"inline-block"}}>
                                {this.state.imageSet.map((data)=>{
                                    return (
                                        <div style={{marginLeft:"100px",float:"left"}}>
                                            {data.type === 'image' ?
                                                <img src={data.url}  width={"300px"} height={"300px"}/>:
                                                <ReactPlayer url={data.url} controls={true} width={"300px"} height={"300px"} />
                                            }
                                        </div>
                                    )
                                })}
                            </div>:null
                        }
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