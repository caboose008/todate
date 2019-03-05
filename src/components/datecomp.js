import React from 'react';

//date input
//when date is selected, the updateOnDateChange method is triggered
export default class DateComp extends React.Component{
	render(){		
		return (<div><div className="row">
					<div className="col-lg-4 col-md-4"></div>
					<div className="col-lg-4 col-md-4">
						<p>Select a date</p>
					</div>	
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-4"></div>
					<div className="col-lg-4 col-md-4">
						<input className="calendar" type="date" id="date" onChange={this.props.updateOnDateChange}/>
					</div>	
				</div></div>);
	}
}
