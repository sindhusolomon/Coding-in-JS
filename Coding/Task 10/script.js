const Day = document.querySelector("#Day");
const Month = document.querySelector("#Month");
const Year = document.querySelector("#Year");

function Date1()
{
    const CurrentDate = new Date();

    const Day2 = CurrentDate.getDate();
    const Month2 = CurrentDate.getMonth()+1;
    const Year2 = CurrentDate.getFullYear();

    Day.innerHTML   = Day2 < 10 ? "0" + Day2 : Day2;
    Month.innerHTML = Month2 < 10 ? "0" + Month2 : Month2;
    Year.innerHTML  = Year2;
}
setInterval(Date1, 1000)