function changeDayTime()
{
let time = new Date();
let hour = time.getHours//to get hour
let minute = time.getMinutes(); //to get minute
let second = time.getSeconds(); //to get sec
let suffix; 
if(hour >=12 && hour<24) 
{
  suffix="PM"
}
else
{
    suffix="AM"
}
hour = hour % 12; //to get remainder
hour = hour ? hour : 12; 
minute = minute < 10 ? "0" + minute : minute;
second = second < 10 ? "0" + second : second;
document.getElementById("demo").innerHTML =hour + ":" + minute + ":" + second + " " + suffix;
let day = time.toDateString();
document.getElementById("dateContainer").innerHTML = day;
}
setInterval(changeDayTime,1000)
