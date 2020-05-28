import React, {Component} from 'react';
import './TitlePage.css';
import Deepanshi from '../assests/deepanshi.png';
import utkarsh from '../assests/utkarsh.png';
import Tarun from '../assests/tarun.png';
import Vani from '../assests/vani.png';
import {FacebookIcon, LinkedinIcon, TwitterIcon} from "react-share";
import {FaRegCopyright} from "react-icons/fa";
import LoginPage from "./LoginPage";

class TitlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openLogin:false,
        }
    }
    closeLogin = ()=>{
        this.setState({openLogin:false});
    }
    render() {
        return (
            <div>
                <div className={"title-bar"}>
                    <img src={"https://w0.pngwave.com/png/361/968/motion-sensors-computer-icons-motion-detection-detect-png-clip-art-thumbnail.png"}  className={"title-icon"}/>
                    <div className={"login-button"} onClick={()=>this.setState({openLogin:true})}>Login</div>
                    <div className={"contact-us"}   onClick={()=>this.setState({openLogin:true})}>Contact Us</div>
                    <div className={"about-us"}     onClick={()=>this.setState({openLogin:true})}>About Us</div>
                </div>
                <img src={"https://images.pexels.com/photos/539282/pexels-photo-539282.jpeg?cs=srgb&dl=agriculture-clouds-corn-corn-field-539282.jpg&fm=jpg"} alt={"Image"} style={{height:"300px",width:"100%"}}/>
                <div className={"about"}>
                    About The Product
                    <div className={"about-data"}>
                        Animal Incursion Detection System is a model which can be used to detect wild animals entering into some farms or agricultural areas.
                        The model produces an alarm which alerts the farmer before any such activity takes place.
                        Wild animals besides disturbing plants can also attack villagers and threaten the safety of the soul and this is where this model can be of great use.
                    </div>
                </div>
                <div className={"team"}>
                    <div style={{textAlign:"center"}}>Our Team</div>
                    <a href={"https://www.linkedin.com/in/utkarsh-gupta-263017138/"}>
                        <div className={"team-details"} >
                            <img src={Deepanshi} alt={"Deepanshi"} className={"team-picture"}/>
                            <div className={"team-name"}>
                                Ms. Deepanshi<br/>
                                Asst. Professor ABES-EC<br/>
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.linkedin.com/in/utkarsh-gupta-263017138/"}>
                        <div className={"team-details"}>
                            <img src={utkarsh} alt={"Utkarsh"} className={"team-picture"}/>
                            <div className={"team-name"}>
                                Utkarsh Gupta<br/>
                                Web Devloper Devslane
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.linkedin.com/in/utkarsh-gupta-263017138/"}>
                        <div className={"team-details"}>
                            <img src={Vani} alt={"Vani"} className={"team-picture"}/>
                            <div className={"team-name"}>
                                Vani Taneja<br/>
                                Software Dev. HSC
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.linkedin.com/in/utkarsh-gupta-263017138/"}>
                        <div className={"team-details"}>
                            <img src={Tarun} alt={"Tarun"} className={"team-picture"}/>
                            <div className={"team-name"}>
                                Tarun Kumar<br/>
                                Software Dev. NECTI
                            </div>
                        </div>
                    </a>
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
                {this.state.openLogin ? <LoginPage open={this.closeLogin} />: null}

            </div>
        );
    }
}

export default TitlePage;