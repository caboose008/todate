import React from 'react';

//purelly cosmetic component. Only displaces the footer of the page, doesn't have any other functionallity
export default class Footer extends React.Component{
	render(){
		return (
			<footer>
			<p className="floatRight"> Photo by George Dolgikh from Pexels</p>				
			</footer>
			);
	}
}