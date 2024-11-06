function Count()
{
    let str = document.getElementById("Count-User").value;

    if(str < 1)
    {
        document.getElementById("Count-Output").innerHTML = "Please Enter the input";
    }
    else
    {
        let vowelCount = 0;
        for (let i = 0; i < str.length; i++) 
        {
            let char = str[i].toLowerCase();
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
                {
                  vowelCount++;
                }
            document.getElementById("Count-Output").innerHTML = "Number of vowels: " + vowelCount;
        }
    }
}
function Clear()
{
    document.getElementById("Count-User").value = " ";
    document.getElementById("Count-Output").innerHTML = " ";
}
  