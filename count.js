"use strict";
setInterval("runClock()", 1000);
function runClock()
{
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   //Use innerHTML to add HTML to the javaScript
   //Current time
   document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

   //Count down to new year
   var newYear = new Date("May 10, 2023");
   var nextYear = currentDay.getFullYear() ;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").innerHTML = Math.floor(secsLeft);
}