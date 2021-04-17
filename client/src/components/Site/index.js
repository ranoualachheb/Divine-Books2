import React from 'react';
import Home from './Home/Home';
import Users from './Users/users';
import { Route } from 'react-router-dom';

const Site = () => {
    return (
        <>
                <Route exact path='/' component={Home} />
                <Route exact path='/Users' component={Users} />
                <Route path='/' component={Home} />
                </>
    );
}

export default Site;