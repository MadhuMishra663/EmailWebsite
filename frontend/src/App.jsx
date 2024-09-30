import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Onebox from './components/Onebox'


// Simple check for authentication (mock implementation)
const isAuthenticated = () => !!localStorage.getItem('token');

const App = () => (
    <Router>
        <Route exact path="/">
            {isAuthenticated() ? <Redirect to="/home" /> : <LoginPage />}
        </Route>
        <Route path="/home">
            {isAuthenticated() ? <Onebox /> : <Redirect to="/" />}
        </Route>
    </Router>
);

export default App;
