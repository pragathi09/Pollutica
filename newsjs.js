let head = document.getElementById("head");
let icon = document.getElementById("icon");
let newslink = document.getElementById("newslink");
let news1 = document.getElementById("news1");
let next=document.getElementById("next").addEventListener("click",nextpage)
        
   let searchLink = "https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=4dde99f67d5642879a68ac2f57f340c6";
        
   httpRequestAsync(searchLink, theResponse);
  

 let i=0;

function theResponse(response) {
    
  let jsonObject = JSON.parse(response);
  
  head.innerHTML = jsonObject.articles[i].title;
  icon.src = jsonObject.articles[i].urlToImage;
  
  news1.innerHTML =jsonObject.articles[i].content;
  newslink=jsonObject.articles[i].url;
  i=i%7+1;
    console.log(newslink);
    var str = "Read the full Article";
  var result = str.link(newslink);
  document.getElementById("newslink").innerHTML = result;
  
} 

function nextpage()
{
  httpRequestAsync(searchLink, theResponse);
}
function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}