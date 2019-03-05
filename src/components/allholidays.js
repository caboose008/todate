import React from 'react';
import Loading from './loading';

export default class AllHolidays extends React.Component{
	constructor(props){
		super(props);		
	}
	render(){
		let holidayDiv;
		let listOfHolidays = this.props.holidays;
		if(listOfHolidays == "loading"){
			return <Loading/>;
		} else if(listOfHolidays.constructor === Array){
			if(listOfHolidays.length == 0){
					holidayDiv = <div>
					<p>No holidays, sorry</p>
				</div>;
				} else {
				let list = listOfHolidays.map((el) => {
					return <div>
								<p>Date : {el.date} </p>
								<p>Name : {el.name}</p>
							</div>;
						});
				holidayDiv = (<div>
					{list}
				</div>);
			}
		} else {
			if(listOfHolidays.date === undefined)
			{
				holidayDiv = <div>
					<p>No holidays, sorry</p>
				</div>;
			} else {
				holidayDiv = <div>
				<p>Date : {listOfHolidays.date} </p>
				<p>Name : {listOfHolidays.name}</p>
				</div>;
			}
			
		}
		return <div className="holidayList">{holidayDiv}</div>;
	}
}

