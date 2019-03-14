//testing the reading of the countries list from a file and returing it as a list
var expect    = require("chai").expect;
var countries = require("../src/lib/countries");

describe("Test list of countries", ()=>{
	it("Raed country list", () => {
		let c_list = countries.getCountriesList();	
		expect(c_list).to.be.an('object');
		let codes = c_list.codes;
		let names = c_list.names; 
		expect(codes).to.be.an('array').that.have.lengthOf(100);
		expect(names).to.be.an('array').that.have.lengthOf(100);
});
	
});