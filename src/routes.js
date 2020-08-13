import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Login} />
            {/* <Route path='/dashboard' component={Dashboard} /> */}
        </BrowserRouter>
    );
}

export default Routes;