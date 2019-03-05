import React from 'react';

//date input
//when date is selected, the updateOnDateChange method is triggered
export default class DateComp extends React.Component{
	render(){		
		return <input type="date" id="date" onChange={this.props.updateOnDateChange}/>;
	}
}
