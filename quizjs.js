let question = document.getElementById("q");
let qu1 = document.getElementById("q1");
let ans1 = document.getElementById("a1");
let ans2 = document.getElementById("a2");
let ans3 = document.getElementById("a3");
let ans4 = document.getElementById("a4");

var sel;    
var count=0;
   let searchLink = "https://opentdb.com/api.php?amount=40&category=17&difficulty=medium&type=multiple";
        
   httpRequestAsync(searchLink, theResponse);
var answer1=document.getElementById("b1").addEventListener("click",color);
var answer2=document.getElementById("b2").addEventListener("click",color);
var answer3=document.getElementById("b3").addEventListener("click",color);
var answer4=document.getElementById("b4").addEventListener("click",color);
var nextques=document.getElementById("next").addEventListener("click",evaluate);
var i=0;
function theResponse(response) {
    i=i%20+1;
  let jsonObject = JSON.parse(response);
 
    if(i==2||i==17||i==8||i==11||i==14)
        {
            qu1.innerHTML=jsonObject.results[i].question;
  ans1.innerHTML=jsonObject.results[i].correct_answer;
  ans2.innerHTML =jsonObject.results[i].incorrect_answers[0];
  ans3.innerHTML = jsonObject.results[i].incorrect_answers[1];
  ans4.innerHTML=jsonObject.results[i].incorrect_answers[2];
        }
    else if(i==1||i==7||i==16||i==10||i==4)
        {
            qu1.innerHTML=jsonObject.results[i].question;
  ans3.innerHTML=jsonObject.results[i].correct_answer;
  ans1.innerHTML =jsonObject.results[i].incorrect_answers[0];
  ans2.innerHTML = jsonObject.results[i].incorrect_answers[1];
  ans4.innerHTML=jsonObject.results[i].incorrect_answers[2];
        }
    else if(i==3||i==6||i==12||i==19||i==15)
        {
            qu1.innerHTML=jsonObject.results[i].question;
  ans4.innerHTML=jsonObject.results[i].correct_answer;
  ans2.innerHTML =jsonObject.results[i].incorrect_answers[0];
  ans3.innerHTML = jsonObject.results[i].incorrect_answers[1];
  ans1.innerHTML=jsonObject.results[i].incorrect_answers[2];
        }
    else if(i==13||i==18||i==9||i==5||i==20){
        qu1.innerHTML=jsonObject.results[i].question;
       ans2.innerHTML=jsonObject.results[i].correct_answer;
  ans3.innerHTML =jsonObject.results[i].incorrect_answers[0];
  ans4.innerHTML = jsonObject.results[i].incorrect_answers[1];
  ans1.innerHTML=jsonObject.results[i].incorrect_answers[2]; 
    }
}

function color()
{
     if(i==2||i==17||i==8||i==11||i==14)
        {
            var id="b1";
            var sell=getid();
            console.log(sell);
            if(id==sell)
                {
          document.getElementById("b1").style.backgroundColor = "#00ea00";
          document.getElementById("b1").style.borderColor = "#00ea00";  
                    count+=1;
                }
          else{
              document.getElementById("b1").style.backgroundColor = "#00ea00";
              document.getElementById("b1").style.borderColor = "#00ea00"; 
              document.getElementById(sell).style.backgroundColor = "#ff0000";
              document.getElementById(sell).style.borderColor = "#ff0000";
          }
      }
 else if(i==1||i==7||i==16||i==10||i==4)
     {
            var id="b3";
            var sell=getid();
            console.log(sell);
            if(id==sell)
                {
         document.getElementById("b3").style.backgroundColor = "#00ea00";
         document.getElementById("b3").style.borderColor = "#00ea00";
                count+=1;
                }
         else{
              document.getElementById("b3").style.backgroundColor = "#00ea00";
              document.getElementById("b3").style.borderColor = "#00ea00"; 
              document.getElementById(sell).style.backgroundColor = "#ff0000";
              document.getElementById(sell).style.borderColor = "#ff0000";
         }
     }
    else if(i==3||i==6||i==12||i==19||i==15)
        {
            var id="b4";
            var sell=getid();
            console.log(sell);
            if(id==sell)
                {
         document.getElementById("b4").style.backgroundColor = "#0f0";
         document.getElementById("b4").style.borderColor = "#00ea00";
                count+=1;
                }
            else{
              document.getElementById("b4").style.backgroundColor = "#00ea00";
              document.getElementById("b4").style.borderColor = "#00ea00"; 
              document.getElementById(sell).style.backgroundColor = "#ff0000";
              document.getElementById(sell).style.borderColor = "#ff0000";
            }
        }
    else if(i==13||i==18||i==9||i==5||i==20) 
        {
             var id="b2";
            var sell=getid();
            console.log(sell);
            if(id==sell)
                {
         document.getElementById("b2").style.backgroundColor = "#0f0";
     document.getElementById("b2").style.borderColor = "#00ea00";
        count+=1;
                }
            else
                {
              document.getElementById("b2").style.backgroundColor = "#00ea00";
              document.getElementById("b2").style.borderColor = "#00ea00"; 
              document.getElementById(sell).style.backgroundColor = "#ff0000";
              document.getElementById(sell).style.borderColor = "#ff0000";
                }
}
}
function setid(sel1)
{
    sel=sel1;
    console.log(sel);
}
function getid()
{
    return sel;
}
function calculate()
{
    score.innerHTML=count;
}
function evaluate()
{
         document.getElementById("b3").style.backgroundColor = "#e7e7e7";
         document.getElementById("b1").style.backgroundColor = "#e7e7e7";
         document.getElementById("b4").style.backgroundColor = "#e7e7e7"
         document.getElementById("b2").style.backgroundColor = "#e7e7e7";
         document.getElementById("b3").style.borderColor = "#e7e7e7";
         document.getElementById("b1").style.borderColor = "#e7e7e7";
         document.getElementById("b4").style.borderColor = "#e7e7e7"
         document.getElementById("b2").style.borderColor = "#e7e7e7";
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


