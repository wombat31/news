function getNews(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=bd2270499a9b4c4890bf927eb04c8cfd';
    var req = new Request(url);
    console.log(req);
    let stories = [];
    fetch(req)
        .then(resp => resp.json())
		.then(({articles}) => {console.log(articles); return articles; })
        //.then(articles =>   console.log(articles["0"].title));THIS WORKS FOR ONE ARTICLE
        .then(storyTitle => {
            for (var prop in storyTitle){
                if (storyTitle.hasOwnProperty(prop)){
                    stories.push(storyTitle[prop].title);
                    //stories.push(storyTitle["0"].title);//WORKS!!!
                    //stories.push(storyTitle["1"].title);//WORKS!!!
                }
                    
                
            }
            console.log(stories);
            console.log(storyTitle.length);
        })
            
        
		
    
    }  


