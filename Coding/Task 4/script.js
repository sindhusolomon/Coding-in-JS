

function calculateFactorial() 

{
    let number = document.getElementById("number").value;
	
    if(number < 1)
    {
        document.getElementById("output").innerHTML = "Please Enter Number";    
    }
    else if(number > 170)
        {
            document.getElementById("output").innerHTML = "Please Enter Factorial Number 1 to 170 Only use";    
        }
    else
    {
        let factorial = 1;
	for (let i = 1; i <= number; i++)
    {
		factorial *= i;
	}
	document.getElementById("output").innerHTML = factorial;
    }
    //  "Factorial of " + number + " is: " +
}
function Clear()
{
    document.getElementById("number").value= " "
    document.getElementById("output").innerHTML = " "
}


