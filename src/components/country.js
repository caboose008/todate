import React from 'react';



export default class Country extends React.Component{
	render(){
		const countries = this.props.countries;
		const selectCountries = countries.codes.map((el, i) => {
			if(countries.codes[i] != "US"){
				return (<option value={countries.codes[i]}>{countries.names[i]}</option>);		
			} else {
				return (<option value={countries.codes[i]} selected="selected">{countries.names[i]}</option>);
			}
		
		});
		return (<select id="countryId"> {selectCountries}</select>);					
	}

};

