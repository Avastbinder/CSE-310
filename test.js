var i;
var j;
const events = new Array(36).fill("");
document.getElementById("addEvent").onclick = function() {addEvent()};
document.getElementById("calender") = function() {writeCalender()};

function writeCalender()
{
    document.getElementById("main_body").innerHTML = `
    =========================================================================================================================================================================================================================================================================================
    | W |		   Monday   		|		 Tuesday  		|		Wednesday		|		Thursday		|		  Friday  		|		Saturday		|		  Sunday   		|
    =========================================================================================================================================================================================================================================================================================
    |   | 1 				| 2 					| 3 					| 4 					| 5 					| 6 					| 7 					| 
    | 1 |  				        |  				        |  				        |  				        |  				        |  				        |  				        | 
    |   | 				        | 				        | 				        | 				        | 				        | 				        | 				        | 
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |   | 8 				| 9 					| 10 					| 11 					| 12 					| 13 					| 14 					| 
    | 2 |  				        |  				        |  				        |  				        |  				        |  				        |  				        | 
    |   | 				        | 				        | 				        | 				        | 				        | 				        | 				        | 
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |   | 15 				| 16 					| 17 					| 18 					| 19 					| 20 					| 21 					| 
    | 3 |  				        |  				        |  				        |  				        |  				        |  				        |  				        | 
    |   | 				        | 				        | 				        | 				        | 				        | 				        | 				        | 
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |   | 22 				| 23 					| 24 					| 25 					| 26 					| 27 					| 28 					| 
    | 4 |  				        |  				        |  				        |  				        |  				        |  				        |  				        | 
    |   | 				        | 				        | 				        | 				        | 				        | 				        | 				        | 
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |   | 29 				| 30 					| 31 					| 32 					| 33 					| 34 					| 35 					| 
    | 5 |  				        |  				        |  				        |  				        |  				        |  				        |  				        | 
    |   | 				        | 				        | 				        | 				        | 				        | 				        | 				        | 
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    `;
    /*
    document.getElementById("calender").write("\n")
    for (i = 1; i < 282; i++)
    {
        document.getElementById("calender").write("=")
    }

    document.getElementById("calender").write("\n| W |\t\t   Monday   \t\t|\t\t Tuesday  \t\t|\t\tWednesday\t\t|\t\tThursday\t\t|\t\t  Friday  \t\t|\t\tSaturday\t\t|\t\t  Sunday   \t\t|\n");

    for (i = 1; i < 282; i++)
    {
        document.getElementById("calender").write("=")
    }
    document.getElementById("calender").write("\n")

    for (i = 0; i<5; i++)
    {
        document.getElementById("calender").write(`|   `)
        for (j = 1; j<=7; j++)
        {
            document.getElementById("calender").write(`| ${(i*7)+j} \t\t\t\t`)
            if (j > 1)
            {
                document.getElementById("calender").write("\t")
            }
        }
        document.getElementById("calender").write(`| \n`);

        document.getElementById("calender").write(`| ${i+1} `)
        for (j = 1; j<=7; j++)
        {
            document.getElementById("calender").write(`| ${events[(i*7)+j]} \t\t\t\t        `)
        }
        document.getElementById("calender").write(`| \n`);

        document.getElementById("calender").write(`|   `)
        for (j = 1; j<=7; j++)
        {
            document.getElementById("calender").write("| \t\t\t\t        ")
        }
        document.getElementById("calender").write(`| \n`);

        for (j = 1; j < 282; j++)
        {
            document.getElementById("calender").write("-")
        }
        document.getElementById("calender").write("\n")
    }
    */
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
        document.getElementById("calender").value = ""
        writeCalender()
    }
}

