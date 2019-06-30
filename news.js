let storyTitles = [];
let storyContent = [];
let imageURLS = [];
let imageLinks = [];

function getNews(){
    var countryCodeSelector = document.getElementById("countrySelector");
    var countryCode = countryCodeSelector.options[countryCodeSelector.selectedIndex].value;
    var subjectCodeSelector = document.getElementById("subjectSelector");
    var subjectCode = subjectCodeSelector.options[subjectCodeSelector.selectedIndex].value;
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
                    imageLinks.push(story[prop].url);
                    //stories.push(storyTitle["0"].title);//WORKS!!!
                    //stories.push(storyTitle["1"].title);//WORKS!!!
                }
                    
                
            }
            console.log(story.length);
        })
        console.log(storyTitles);
        console.log(storyContent);
        console.log(imageURLS);
        console.log(imageLinks);
        //console.log(countryCodeSelector);
        console.log(countryCode);
        console.log(subjectCode);
         
    renderNews(); 
}  

function renderNews(){
    for (var count in storyTitles){
        
        var div = document.createElement("div");
        div.style.color = "red";
        div.style.fontSize = "18px";
        div.innerHTML = storyTitles[count];
        document.getElementById("news").appendChild(div);
        //not working yet
        var link = document.createElement("a");
        link.href = imageLinks[count];
        //trying to link an href to the paragraph!!!
        var para = document.createElement("p");
        para.style.color = "blue";
        para.style.fontSize = "12px";
        
        link.appendChild(para);
        para.innerHTML = storyContent[count];
        document.getElementById("news").appendChild(link);
        
        var img = document.createElement("img");
        img.src = imageURLS[count];
        img.style.width = "100%";
        img.style.padding = "10px";
        document.getElementById("news").appendChild(img);
    }
}