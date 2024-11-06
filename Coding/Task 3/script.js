//html id imput
// const input = document.getElementById("input").value;
// const output = document.getElementById("output");

function convertCaseU()
{
    const str = document.getElementById("input").value;
    const output = document.getElementById("output");
    
    if(str < 1)
        {
            output.innerHTML = "Please Enter the input";
        }
    else
        {
            //Change lowercase 
            let uppercase = str.toUpperCase();
            
            //print output
            output.innerHTML = uppercase ;
        }
}

function convertCaseL()
{
    const str = document.getElementById("input").value;
    const output = document.getElementById("output");

    if(str < 1)
        {
          output.innerHTML = "Please Enter the input";
        }
    else
        {
          //Change lowercase 
          let lowercase = str.toLowerCase();
               
          //print output
          output.innerHTML = lowercase;
        }
}
function Clear()
{
    const output = document.getElementById("output");
    const input1 = document.querySelector(".text1");
    
    input1.value = " "
    output.innerHTML=" "
}