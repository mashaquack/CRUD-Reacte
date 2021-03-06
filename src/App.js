import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table/Table'

class App extends Component {

state={
  data: []
}

async componentDidMount(){
  const response = await fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
)
const data = await response.json()

this.setState({
data

})
}

  render() {
    return (
      <div className="container">
        {
      <Table
      data={this.state.data}
      />
        }
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </div>     
    );
  }
}

export default App;
