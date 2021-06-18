//Getting difference between today and Eid day in milliseconds

var eidDay = new Date("20 July 2021").getTime();
var counter = setInterval(function countDown() {
    var now = new Date().getTime();
    var difference = eidDay - now;
    if (difference > 0) {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        //Displaying the remaining time in the browser
        document.getElementById("days").innerText = days + " ";
        document.getElementById("hours").innerText = hours + " ";
        document.getElementById("minutes").innerText = minutes + " ";
        document.getElementById("seconds").innerText = seconds + " ";
    } else if (difference <= 0) {
        clearInterval(counter);
        document.getElementById("message-div").innerHTML = "<img id='eid-mubarak' src='eid-ul-adha.jpg'>";
        document.getElementById("eid-mubarak").style.width = "100%";
    }
}, 1000);
