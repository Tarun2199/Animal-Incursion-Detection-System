import React from "react";
import Modal from "react-modal";
import {GoogleLogin} from "react-google-login";
import './LoginPage.css';
import firebase from '../../Firebase';
import {Redirect} from "react-router-dom";

export default class LoginPage extends React.Component {
    state = {
        signup:false,
        googleId:""
    };
    logoutUser = ()=>{
        this.setState({googleId:""})
    }
    responseGoogle = (response) => {
        firebase.firestore().collection('users').doc(response.profileObj.googleId).set({
            email: response.profileObj.email,
            name: response.profileObj.name,
            imageurl: response.profileObj.imageUrl,
        }).then(()=>{
            this.setState({googleId:response.profileObj.googleId})
        });
    };
    render() {
        const customStyles = {
            content : {
                borderRadius          : '5px',
                width                 : '300px',
                top                   : '40%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        };
        return (
            <div>
                <Modal isOpen={true} style={customStyles} >
                    <div className={"remove"} onClick={this.props.open}>
                        &times;
                    </div>
                    <div className={"login-title"}>
                        {this.state.signup ? "SignUp" : "Login" } To IDS
                    </div>
                    <div className={"login-types"}>
                        <div className={"login-using"}>Using</div>
                        <div className={"google-oauth-button"}>
                            <GoogleLogin
                                clientId="628399570574-itrm9nrstnlngeflpr27fda78f6775d9.apps.googleusercontent.com"
                                buttonText="SignIn"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <br/>
                        <div className={"login-using"}>- OR USING EMAIL -</div>
                        {this.state.signup?
                            <form className={"login-form"}>
                                <input type={"text"} className={"login-form"} placeholder={"Name"} />
                                <input type={"text"} className={"login-form"} placeholder={"Your Email Address"} />
                                <input type={"password"} className={"login-form"} placeholder={"Choose Password"} /><br/>
                                <button className={"login-form login-form-button"}>Register</button>
                                <div className={"slambook-new signup"} onClick={()=>{this.setState({signup:false})}}>Login</div>
                                <div className={"slambook-new"}>Already Have A Account?  </div>
                            </form> :
                            <form className={"login-form"}>
                                <input type={"text"} className={"login-form"} placeholder={"Your Email Address"} />
                                <input type={"password"} className={"login-form"} placeholder={"Enter Password"} /><br/>
                                <button className={"login-form login-form-button"}>Login</button>
                                <div className={"slambook-new signup"} onClick={()=>{this.setState({signup:true})}}>Create Account</div>
                                <div className={"slambook-new"}>New to SlamBook?  </div>
                            </form>
                        }
                    </div>
                </Modal>
                {this.state.googleId.length>0 ?  <Redirect  to={{
                    pathname: '/user',
                    state: { googleId:this.state.googleId},
                    logout : this.logoutUser
                }} />:null}
            </div>
        );
    };
}