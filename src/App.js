import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DateComp from './components/datecomp';
import Header from './components/header';
import Footer from './components/footer';
import {Request} from './lib/server';
import AllHolidays from './components/allholidays';
import Country from './components/country';
import {getCountriesList} from './lib/countries';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "holidays" : {},
      "countries" : getCountriesList()
    };
    this.updateOnDateChange = this.updateOnDateChange.bind(this);
    

  }

  render() {
    return (
      <div className="App">
        <Header/>        
        <div className="mainBody">
          <Country updateOnDateChange={this.updateOnDateChange} countries={this.state.countries}/>
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
    let selectEl = document.getElementById('countryId');   
    let country = selectEl.options[selectEl.selectedIndex].value
    Request.requestByDate(country, date.substring(5,7), date.substring(8,10)).then(jsonResp => {
          /*console.log(`jsonResp ${JSON.stringify(jsonResp["holidays"])}`);*/
          this.setState({"holidays" : jsonResp["holidays"]});
          return jsonResp["holidays"];
      });
  }
}
export default App;

