import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import User from '../User';

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/user/'>User</Link>
                </div>
            </nav>
            <Switch>
                <Route path='/user' component={User} />
                
                <Route path='/' exact component={Home} />
                    
            </Switch>
        </BrowserRouter>
        
    );
}

export default App;
