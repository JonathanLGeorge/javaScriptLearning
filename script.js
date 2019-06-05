const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hours:" + hr + " Minutes:" + min +  " seconds:" + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);//this makes the min hand move slowly with the second hand
let secPosition = sec*360/60;

function runTheClock(){
  hrPosition = hrPosition+(1/120); // 3600/12 = 30/3600 or 3/36 or 1/120
  minPosition= minPosition+(1/10); //1/60 *6
secPosition = secPosition+6;  // 360/60 = 6 degrees
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform ="rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);// that 1000millsec = 1 sec
