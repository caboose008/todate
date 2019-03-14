const fileName = './contries.txt';
const fs = require('fs');
//var countriesUtil = require("./countries");


 


exports.getCountriesList = function(){
	let countries = {
		names : [],
		codes : []
	};
	let contents = fs.readFileSync('./src/lib/countries.txt', 'utf8');
	//console.log(contents);
	let arr = [...contents.split('\n')];
	arr.forEach((el, i) =>{
		i % 2 === 0 ? countries.codes.push(el) : countries.names.push(el);
	});
	return countries;

};