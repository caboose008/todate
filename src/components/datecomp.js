import React from 'react';

//date input
//when date is selected, the updateOnDateChange method is triggered
export default class DateComp extends React.Component{
	render(){
		let d = new Date();
		let dateString = `${d.toISOString().substring(0,10)}`;
		return <input type="date" id="date" onChange={this.props.updateOnDateChange}/>;
	}
}
