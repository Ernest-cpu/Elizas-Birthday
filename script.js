
function surprise(){

document.getElementById("lovePopup").style.display="flex";

createConfetti();

document.getElementById("birthdaySong").play();

}

function closePopup(){

document.getElementById("lovePopup").style.display="none";

}

function createConfetti(){

for(let i=0;i<150;i++){

let confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

document.body.appendChild(confetti);

setTimeout(()=>confetti.remove(),4000);

}

}

const targetDate = new Date("March 25 2026").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

},1000);