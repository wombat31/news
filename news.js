let storyTitles = [];
let storyContent = [];
let imageURLS = [];

function getNews(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=bd2270499a9b4c4890bf927eb04c8cfd';
    var req = new Request(url);
    console.log(req);
    
    fetch(req)
        .then(resp => resp.json())
		.then(({articles}) => {console.log(articles); return articles; })
        //.then(articles =>   console.log(articles["0"].title));THIS WORKS FOR ONE ARTICLE
        .then(story => {
            for (var prop in story){
                if (story.hasOwnProperty(prop)){
                    storyTitles.push(story[prop].title);
                    storyContent.push(story[prop].content);
                    imageURLS.push(story[prop].urlToImage);
                    //stories.push(storyTitle["0"].title);//WORKS!!!
                    //stories.push(storyTitle["1"].title);//WORKS!!!
                }
                    
                
            }
            console.log(storyTitles);
            console.log(storyContent);
            console.log(imageURLS);
            console.log(story.length);
        })  
}  


