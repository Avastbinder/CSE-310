var i;
var j;

function addEvent()
{
    let date = Number(prompt("Enter the calender day you wish to add an event to:"));

    if (!(date >= 1 || date <= 31)) 
    {
        alert("Value entered is not a number between 1 and 31, please try again.");
        addEvent();
    }
    else
    {
        let event = prompt("Enter the event you wish to add to the calender:");
        events[date] = `${event}`;
        for (i = 0; i < 19-event.length; i = i + 1)
        {
            events[date] += "&#160;";
        }
        document.getElementById("calender").innerHTML = "";
        writeCalender()
    }
}

