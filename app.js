//Getting difference between today and Eid day in milliseconds

var eidDay = new Date("20 July 2021").getTime();
setInterval(function countDown() {
var now = new Date().getTime();
var timeleft = eidDay - now;

    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//Displaying the remaining time in the browser
document.getElementById("days").innerText = days + " ";
document.getElementById("hours").innerText = hours + " ";
document.getElementById("minutes").innerText = minutes + " ";
}, 1000)
