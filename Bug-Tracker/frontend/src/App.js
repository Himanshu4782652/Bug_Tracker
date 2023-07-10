import React from 'react';
import { useSelector } from 'react-redux'
import Login from './views/Components/Login/login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './views/sidebar/sidebar'
import viewBugs from './views/Pages/viewBugs'
import viewBugPage from './views/Pages/viewBugs'
import CreateBug from './views/Components/Bug Create & edit/bugForm'
import Dashboard from './views/Pages/Dashboard/dashboard';

function App() {
    const { auth } = useSelector(state => state)
    return (
        <Router>
            {!auth.LoggedIn ? <Login /> :
                <>
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact><Dashboard /></Route>
                        <Route path="/viewbugs">ViewBugPage</Route>
                        <Router path="/create"><div className='page-container'><CreateBug title="Create Bug" /></div></Router>
                    </Switch>
                    <viewBugPage />
                </>
            }
        </Router>
    );
}

export default App;