const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'daba297c93msh70daed8fd5f942dp1de2afjsnc148e4a26ac4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));