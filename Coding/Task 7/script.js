
const input = document.getElementById("input");
const table = document.getElementById("table-output");
const outputBox=document.querySelector(".outputBox")

function multi()
{
    if(input.value < 1)
    {
        outputBox.style.display="flex";
        outputBox.style.height="100px";
        outputBox.style.fontSize="30px";
        outputBox.style.color="red";
        table.innerHTML="Please Enter a Number";
    }
    else
    {
        outputBox.style.display="flex";
        outputBox.style.height="400px";
        table.innerHTML = "";
        for (let i = 1; i <= 10; i++)
            {
                const row   = table.insertRow();
                const cell1 = row.insertCell();
                const cell3 = row.insertCell();
                const cell4 = row.insertCell();
                const cell2 = row.insertCell();
                cell1.innerHTML = `${i}  `;
                cell3.innerHTML = `x ${input.value}`;
                cell4.innerHTML = `= `;
                cell2.innerHTML = `${i * input.value}`;
            }
    }
}
function Clear()
{
    table.innerHTML = " " ;
    input.value = " " ;
    outputBox.style.display = "none" ;   
    outputBox.style.height=" ";
}