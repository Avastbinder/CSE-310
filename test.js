var events = [];
document.getElementById("addEvent").onclick = function() {addEvent()};

for (var i = 0; i<=31; i++)
{
    if (i <= 9)
    {
        events[i] = ` ${i}  `;
    }
    else
    {
        events[i] = ` ${i} `;
    }
}

document.write("\n------------------------------------\n|");
for (var i = 1; i<=31; i++)
{
    document.write(`${events[i]}|`)

    if ((i % 7 == 0 && i != 0) || i == 28)
    {
        document.write("\n------------------------------------\n|");
    }   
}
document.write("\n------------------------------------");

function addEvent()
{
    let date = prompt("Enter the calender day you wish to add an event to:");

    if (!((typeof date === 'number') && (date >= 1 || date <= 31))) 
    {
        alert("Value entered is not a number between 1 and 31, please try again.");
        addEvent();
    }
    else
    {
        let event = prompt("Enter the event you wish to add to the calender:");
        events[date] = ` ${date}  \n${event}`;
    }
}