
const text1 = document.getElementById("text1");

function replace()
{
    text1.innerHTML = "Front End to Full Stack";
    document.querySelector("#button-box2").style.display = "block";
    document.querySelector("#button-box1").style.display = "none";
    // buttonBox1.style.dsplay="block";
}
function Return()
{
    text1.innerHTML = "front end";
    document.querySelector("#button-box2").style.display = "none";
    document.querySelector("#button-box1").style.display = "block";
}