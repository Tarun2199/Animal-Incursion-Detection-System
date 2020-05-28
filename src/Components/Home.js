import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import TitlePage from "./TitlePage/TitlePage";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Dashboard/Profile";
class Home extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={"/user"} component={Dashboard} />
                    <Route exact path={"/profile"} component={Profile} />
                    <Route  path={"/"} component={TitlePage} />
                </Switch>
            </Router>
        );
    }
}

export default Home;