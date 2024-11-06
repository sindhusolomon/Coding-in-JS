function Checking()
{
    var number = document.getElementById("number").value;
    var result = document.getElementById("result");

    if(number < 1)
    {
        result.innerHTML="please enter the number"
        return;
    }
    else if (number % 2 == 0)
    {
        result.innerHTML="The is EVEN number";
        return;
    }
    else
    {
        result.innerHTML="The is ODD number";
        return;
    }
}
function Clear()
{
    number.value=" "
    result.innerHTML=" "
}