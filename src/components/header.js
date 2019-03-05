import React from 'react';

//purelly cosmetic component. Only displaces the header of the page, doesn't have any other functionallity
export default class Header extends React.Component{
	render(){
		return (
			<header>
				<div>
					<h1>toDate</h1>
				</div>
				<div className="line"></div>
			</header>
			);
	}
}