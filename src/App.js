import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DateComp from './components/datecomp';
import Header from './components/header';
import {Request} from './lib/server';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "events" : {},
    };
    this.updateOnDateChange = this.updateOnDateChange.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <DateComp updateOnDateChange={this.updateOnDateChange} date={this.state.date}/>
        <button onClick={this.updateOnDateChange}>Test</button>
      </div>
    );
  }
  //listener to fetch holidays when the date is changed
  updateOnDateChange(e){
    let date = document.getElementById('date').value;
    console.log(`date ${date}`);
    Request.requestByDate("US",date.substring(0,4), date.substring(5,7), date.substring(8,10)).then(jsonResp => {
          console.log(`jsonResp ${JSON.stringify(jsonResp["holidays"])}`);
          return jsonResp["holidays"];
      });
  }
}

export default App;

