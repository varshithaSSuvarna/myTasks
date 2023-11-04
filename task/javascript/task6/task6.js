let count=0;
function increment()
{
  count=count+1;
  document.getElementById("demo").innerHTML=count;
}
function decrement()
{
  count=count-1;
  document.getElementById("demo").innerHTML=count;
  if(count<0)
  {
    count=0;
    document.getElementById("demo").innerHTML=count;
  }
}
function reset()
{
  count=0;
  document.getElementById("demo").innerHTML=count;
}