import React, { Component } from 'react';
import './App.css';
import data from './products.json';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
        </header>
        <div className="container">
          <Card data ={data}/>
        </div>  
      </div>
    );
  }
}

export default App;
