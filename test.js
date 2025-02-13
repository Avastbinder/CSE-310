var i;
var j;
document.getElementById("addEvent").onclick = function() {addEvent()};

function writeCalender()
{
    
}

writeCalender()

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
        document.getElementById("calender").reset()
        writeCalender()
    }
}

