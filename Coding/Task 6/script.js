const newElement =document.getElementById("new-element").value;

const a1 = [23 + " , " + 45 + " , " + 89 + " , " + 22 + " , " + 77 + " , " + 9];

function insertElement() 
{
		const newElement = parseInt(document.getElementById("new-element").value);
		a1.unshift(newElement);
		document.getElementById("array-output").innerHTML = "Array after inserting" + " : " + a1;
}

function addNumbers() 
{
	const newElement = document.getElementById("new-element").value.split(",");
	newElement.forEach((num) => a1.push(parseInt(num)));
	document.getElementById("array-output").innerHTML = "Array after adding" + " : " + a1;
}

function deleteLastElement() 
{
	a1.pop();
	document.getElementById("array-output").innerHTML = "Array after deleting the last element" + " : " + a1;
}
function Clear()
{
    document.getElementById("new-element").value=" ";
    document.getElementById("array-output").innerHTML = " ";
}