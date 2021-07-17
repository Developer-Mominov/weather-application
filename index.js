var input = document.querySelector(".input");

var n1 = document.querySelector(".n1");
var n2 = document.querySelector(".n2");
var n3 = document.querySelector(".n3");
var n4 = document.querySelector(".n4");
var n5 = document.querySelector(".n5");



function fade(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=aab5e5ad06978731f597970c26b96b5c')
.then(response => response.json())
.then(data =>{
    console.log(data);
    var tempvalue=data.main.temp;
    var description=data['weather'][0]['main'];
    var wind1=data.wind.speed;
    var namlik=data.main.humidity;
    //3.4

    n1.innerHTML="Weather in "+input.value;
     n2.innerHTML=Math.floor(tempvalue-273.15)+"<sup><small>o</small></sup>C";
     n4.innerHTML="Humanity: "+(Math.round(wind1*3.6))+"km/h";
     n3.innerHTML=description;
     n5.innerHTML="Wind: "+namlik+'%';

     



})

 .catch(err => alert("Wrong city name"));

}