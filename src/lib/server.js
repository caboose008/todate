//function for retriving events by date
export const Request = {
		requestByDate : function(country = "US", month = "01", day = "01") {
			const endpoint = `https://cors-anywhere.herokuapp.com/http://api.holid.co/v1/${country}/${day}/${month}`;
		 	return fetch(endpoint, 
		 		{
		 			/**/
		 			"method":"GET",
		 			"mode":"cors"}).then((response) => {
						console.log(response.status);
						let json = response.json();
					 	if (response.status >= 200 && response.status < 300) {
					 			console.log(`events ${json}`);
						    	return json;
						  } else {
						    	return json.then(Promise.reject.bind(Promise));
						  }				
			});
	}
}



