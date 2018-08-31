import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'
import Header from './Component/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      inventory: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res=>this.setState({
      inventory: res.data
    }))
  }

  render() {
    return (
      <div className="App">
       <Dashboard inventory={this.state.inventory}/>
       <Form/>
       <Header/>
        
      </div>
    );
  }
}

export default App;
