import React, { Component } from 'react';
import Steppers from './Steppers';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items: []
  }
  loadData = async ()=> {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/list/1?api_key=1d5832d904386ff315e3252a254a432a&language=en-US`);
    let ourData = await apiResponse.json();  
    return ourData;
  }
  
  componentDidMount() {
    this.loadData().then(res => this.setState({items: res.items}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.items.length >0 &&
        <Steppers items={this.state.items} />
        }
        
      </div>
    );
  }
}

export default App;
