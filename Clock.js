
const deg = 6;
const hr = document.getElementById("hr");

const mn = document.getElementById('mn');

const sc = document.getElementById('sc');




setInterval(() => {
    
let  day = new Date();

let hh = day.getHours()*30;

let mm = day.getMinutes()*deg;

let ss = day.getSeconds()*deg;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;

mn.style.transform = `rotateZ(${mm}deg)`;

sc.style.transform = `rotateZ(${ss}deg)`;

let hours = document.getElementById('hour');

let minites = document.getElementById('minites');

let seconds = document.getElementById('seconds');

let ampm = document.getElementById('ampm');


let h = new Date().getHours();

let m = new Date().getMinutes();

let s = new Date().getSeconds();

let am = 'AM';


if(h > 12){
    h = h - 12;
    am = "PM";
}

//Add Zero Before Single Digit Numbers

h = (h<10) ? "0" + h : h

m = (m<10) ? "0" + m : m

s = (s<10) ? "0" + s : s





hours.innerHTML = h + ":";

minites.innerHTML = m + ":";

seconds.innerHTML = s + "&nbsp";

ampm.innerHTML = am;


});


