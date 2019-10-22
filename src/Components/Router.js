import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Routes/Auth';
import Feed from './Routes/Feed';

const LoggedInRoutes = () =>(
    <>
        <Route exact path = "/" component={Feed} /> 
    </>
);/* 로그 인 하면 Feed 보여준다 */

const LoggedOutRoutes = () => (
    <> 
        <Route exact path = "/" component={Auth} /> 
    </>
); /* 로그 아웃 하면 Auth 보여준다 */

const AppRouter = ({isLoggedIn}) => (
    <Router>
        <Switch>{isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch>
    </Router>
);/*로그인 되면 <LoggedInRoutes/>, 로그아웃 되면 <LoggedOutRoutes/> */

Router.PropTypes = {
    isLoggedIn : PropTypes.bool.isRequired
}

export default AppRouter;