import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard'
import Form from './Component/Form/Form'
import Header from './Component/Header/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      inventory: [{name: 'orange',price: 1.5, image: `https://www.google.com/imgres?imgurl=http%3A%2F%2Fsoappotions.com%2Fwp-content%2Fuploads%2F2017%2F10%2Forange.jpg&imgrefurl=http%3A%2F%2Fsoappotions.com%2Fproduct%2Forange%2F&docid=evdn_A20XGFN3M&tbnid=LA913WkZHUUsjM%3A&vet=10ahUKEwjs9c2P7pfdAhXum-AKHUiEDZwQMwiFAigBMAE..i&w=605&h=612&bih=703&biw=1280&q=orange&ved=0ahUKEwjs9c2P7pfdAhXum-AKHUiEDZwQMwiFAigBMAE&iact=mrc&uact=8`}, {name: 'potato', price: 2.0, image: 'Not Available'}, {name: 'Nike', price: 40, image: 'Loading...'}]
    }
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
