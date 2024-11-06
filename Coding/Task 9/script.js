
function checkDivisibility() 
{
    if(document.getElementById("number").value < 1)
    {
      result.innerHTML = "Please Enter a Number";
    }
    else
    {
      const number = document.getElementById("number").value;
    const result = document.getElementById("result");
    
    if (number % 6 === 0)
    {
      result.innerHTML = `${number} is divisible by 6`;
    }
    else
    {
      result.innerHTML = `${number} is not divisible by 6`;
    }
    }
}
function Clear()
{
    document.getElementById("number").value=" ";
    document.getElementById("result").innerHTML=" ";
}