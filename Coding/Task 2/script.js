var pritContainer = document.querySelector(".prit-container");
var pritoutBox = document.querySelector(".pritout-box")
var container=document.querySelector(".container");
var name1=document.querySelector("#name1");
var printNumber=document.querySelector("#printnumber");
// var error = querySelector("#error")
function Opne()
{
  const nameInput = name1.value;
  const printNumber1 = printNumber.value;


  if(nameInput < 1)
  {
    document.querySelector(".error").style.display =" block";
    document.querySelector("#error").innerHTML =" Please Enter Name ";
  }
  else if ( printNumber1 < 1)
  {
    document.querySelector(".error").style.display = "block";
    document.querySelector("#error").innerHTML = "Please Enter Count";
  }
  // else if(printnumber < 1)
  // {
  //   document.querySelector(".error").style.display =" block";
  //   document.querySelector("#error").innerHTML =" Please Enter Count ";
  // }
  else
  {
    pritoutBox.style.display="block"
    pritContainer.style.display="none";
    container.style.display="none"
  }
}
function Print()
{
    pritoutBox.style.display="none"
    pritContainer.style.display="block";
    container.style.display="none"

    //id-input-javascript
  let name1 = document.getElementById("name1").value;
  let printnumber = document.getElementById("printnumber").value;

  //print arrow Function
  let printName = (name, count) => {
    let output = '';
    for(let i=0; i<count; i++){
      output += `<p>${name}</p>`;
    }
    //output
    document.getElementById('output').innerHTML = output;
  }
  printName(name1, printnumber);
}
function Clear()
{
    name1.value=" "
    printNumber.value=" "
    output.innerHTML=" "
    document.querySelector(".error").style.display =" none";
    document.querySelector("#error").innerHTML =" ";
}

function goBack()
{
    pritoutBox.style.display="none"
    pritContainer.style.display="none";
    container.style.display="block"
}
function goBack2()
{
    pritoutBox.style.display="block"
    pritContainer.style.display="none";
    container.style.display="none"
}
function containerClose()
{
  pritoutBox.style.display="none"
  pritContainer.style.display="none";
  container.style.display="block" 
  name1.value=" "
  printnumber.value=" "
  output.innerHTML=" "
}
function printoutBoxClose()
{
  pritoutBox.style.display="none"
  pritContainer.style.display="none";
  container.style.display="block" 
  name1.value=" "
  printnumber.value=" "
  output.innerHTML=" "
}