import React, { Component } from 'react';
import './App.css';
import data from './products.json';
import Card from './components/Card';
import Combo from './components/Combo';
import Banner from './components/Banner';

let arr =new Set();
const items = data.map(info => {
  return info.size;
});

items.forEach(element => {
  element.forEach(i => {
    arr.add(i);
  });
});

const arrSizes=Array.from(arr);

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      filter:''
      }
  }

  filter=(e) =>{
    this.setState({
      filter:e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">     
          Women's Top
        <Combo size={arrSizes} onChange={this.filter}/>
        </header>
        <div className="content">
        <div className="container">
          <Card data ={data} filter={this.state.filter}/>
          <br className="clearboth" />
        </div>
        </div>  
        <Banner />
      </div>
      
    );
  }
}

export default App;
