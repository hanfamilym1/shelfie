import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'
import Header from './Component/Header/Header'
import axios from 'axios'
import {HashRouter, Link} from 'react-router-dom'
import routes from './routes'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      inventory: []
    }
    
  }


  render() {
    // console.log(this.state.inventory)
    return (
      <div className="App">
          <HashRouter>
            {routes}
        {/* <Link to='/'>Dashboard</Link> */}
       {/* <Dashboard inventory={this.state.inventory} getInventory={this.getInventory}/> */}
       {/* <Form getInventory={this.getInventory}/> */}
       {/* <Header/> */}
        
      </HashRouter>
      </div>
    )
  }
}

export default App;
