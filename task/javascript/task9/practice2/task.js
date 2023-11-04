let element=document.querySelectorAll(".circle");
let bulbColor=document.getElementById("bulbColor");
let setcolor=["#f4f46a","#e5b3bb","#f89b21","#d7d5d5","#30b5ea","#e4af4d","#42e242","#200bdc","#e72121","#c4f68a","#e12ce1","#7241fa"];
element.forEach((circle,index)=>
{
    circle.addEventListener("click",() =>
    {
        bulbColor.style.background=setcolor[index];
    });
});
function offbulb()
{
    bulbColor.style.display="none"
}
function onbulb()
{
    bulbColor.style.background="#efd409";
}
