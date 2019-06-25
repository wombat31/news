function getNews(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=bd2270499a9b4c4890bf927eb04c8cfd';
    var req = new Request(url);
	console.log(req);
    fetch(req)
        .then(resp => resp.json())
		.then(({articles}) => {console.log(articles); return articles; })
		.then(articles => console.log(articles["0"].author));
		
    
    }  


