import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import CourseList from './pages/CourseList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/courses" component={CourseList} />
            </Switch>
        </Router>
    );
}

export default App;
