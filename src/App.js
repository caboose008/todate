import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DateComp from './components/datecomp';
import Header from './components/header';
import Footer from './components/footer';
import {Request} from './lib/server';
import AllHolidays from './components/allholidays';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "holidays" : {},
    };
    this.updateOnDateChange = this.updateOnDateChange.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Header/>        
        <div className="mainBody">
          <DateComp updateOnDateChange={this.updateOnDateChange} date={this.state.date}/>
          <AllHolidays holidays={this.state.holidays}/>
        </div>
      <Footer/>
      </div>
    );
  }
  //listener to fetch holidays when the date is changed
  updateOnDateChange(e){
    this.setState({"holidays" : "loading"});
    let date = document.getElementById('date').value;    
    Request.requestByDate("US", date.substring(5,7), date.substring(8,10)).then(jsonResp => {
          /*console.log(`jsonResp ${JSON.stringify(jsonResp["holidays"])}`);*/
          this.setState({"holidays" : jsonResp["holidays"]});
          return jsonResp["holidays"];
      });
  }
}

export default App;

