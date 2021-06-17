//Getting difference between today and Eid day in milliseconds
var today = new Date().getTime();
var eidDay = new Date("20 July 2021").getTime();
var diffInMillis = eidDay - today;
var days = Math.floor(diffInMillis / (1000 * 3600 * 24));
var hours = Math.floor(diffInMillis / (1000 * 3600)) % 24;
var minutes = Math.floor(diffInMillis / (1000 * 60)) % 60;

//Displaying the remaining time in the browser
document.getElementById("days").innerText = days + " ";
document.getElementById("hours").innerText = hours + " ";
document.getElementById("minutes").innerText = minutes + " ";

