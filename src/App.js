import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import OrderList from './components/Order/OrderList'
import Order from './components/Order/Order'

 

function App() {
    return (
        <div className="App">
          <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to='/'>Rad UI</Link>
            </nav>

            <div className='mt-5'>
              <div className='container'>

                <Switch>
                  <Route exact path="/">
                    <OrderList />
                  </Route>
                  <Route exact path="/orders/:id" render={(props) => <Order {...props} />} />
                </Switch>
                </div>
            </div>
          </Router>
        </div>
    );
}

export default App;