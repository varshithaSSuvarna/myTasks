const element=document.querySelectorAll(".balloon")
let remainingBalloon=element.length;
element.forEach((balloon)=>{
    balloon.addEventListener("click",pop)
})
function pop()
{
   this.style.display="none";
   remainingBalloon--;
   if(remainingBalloon===0)
   {
    document.getElementById("demo").innerHTML="All Balloons are popped";
   }
}