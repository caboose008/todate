//function for retriving events by date
const key = "2c05f411-dd68-40d4-9c05-246ffc222023";
export const Request = {
		requestByDate : function(country = "US", year = "2018", month = "01", day = "01") {
		 	return fetch(`https://holidayapi.com/v1/holidays?key=${key}&country=${country}&year=${year}&month=${month}&day=${day}`, 
		 		{
			 	"Content-Type" : "application/json",
		 		"method":"GET"}).then((response) => {
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



