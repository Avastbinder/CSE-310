var i = 0;
var j = 0;

const events = new Array(72).fill("&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;");
const button = document.createElement("button");
button.setAttribute("onclick", `addEvent();`);
button.textContent = "Click";

function addEvent()
{
    let date = Number(prompt("Enter the calender day you wish to add an event to:"));

    if (!(date >= 1 || date <= 35)) 
    {
        alert("Value entered is not a number between 1 and 31, please try again.");
        addEvent();
    }
    else
    {
        let event = prompt("Enter the event you wish to add to the calender:");
        
        if (event.length > 19)
        {
            events[(date*2)] = `${event.slice(0, 19)}`;
            events[(date*2)+1] = `${event.slice(20, -1)}`;

            for (var i = 0; i < 19-events[(date*2)+1].length; i = i + 1)
            {
                events[(date*2)+1] += "&#160;";
            }
        }
        else
        {
           events[(date*2)] = `${event}`; 
        }
    
        for (var i = 0; i < 19-(events[date*2].length); i = i + 1)
        {
            events[date*2] += "&#160;";
        }

        document.getElementById("calender").innerHTML = "";
        writeCalender()
    }
}

function writeCalender()
{
    let html = "<br/>";
    for (i = 1; i < 75; i++)
    {
        html += `=`
    }

    html += `<br/>|&#160;w&#160;|&emsp;Monday&emsp;|&emsp;Tuesday&emsp;|&emsp;Wednesday&emsp;|&emsp;Thursday&emsp;|&emsp;Friday&emsp;|&emsp;Saturday&emsp;|&emsp;Sunday&emsp;|<br/>`;

    for (i = 1; i < 75; i++)
    {
        html += `=`
    }
    html += `<br/>`

    for (i = 0; i<5; i++)
    {
        html += `|&#160;&#160;&#160;&#160;`
        for (j = 1; j<=7; j++)
        {
            if ((i*7)+j < 10)
            {
                html += `|&#160;${(i*7)+j}&#160;&#160;&#160;&emsp;&emsp;&emsp;&emsp;`
            }
            else
            {
                html += `|&#160;${(i*7)+j}&#160;&emsp;&emsp;&emsp;&emsp;`
            }
        }
        html += `|<br/>`

        html += `|&#160;${i+1}&#160;`
        for (j = 1; j<=7; j++)
        {
            html += `|&#160;${events[(((i*7)+j)*2)]}`
        }
        html += `|<br/>`

        html += `|&#160;${i+1}&#160;`
        for (j = 1; j<=7; j++)
        {
            html += `|&#160;${events[(((i*7)+j)*2)+1]}`
        }
        html += `|<br/>`

        for (j = 1; j < 126; j++)
        {
            html += `-`
        }
        html += `<br/>`
    }
    document.body.append(button);
    document.getElementById("calender").innerHTML += html
}