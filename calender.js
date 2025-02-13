function writeCalender()
{
    var i = 0;
    var j = 0;

    document.write(`<br/>`)
    for (i = 1; i < 75; i++)
    {
        document.write(`=`)
    }

    document.write(`<br/>|&#160;w&#160;|&emsp;Monday&emsp;|&emsp;Tuesday&emsp;|&emsp;Wednesday&emsp;|&emsp;Thursday&emsp;|&emsp;Friday&emsp;|&emsp;Saturday&emsp;|&emsp;Sunday&emsp;|<br/>`);

    for (i = 1; i < 75; i++)
    {
        document.write(`=`)
    }
    document.write(`<br/>`)

    for (i = 0; i<5; i++)
    {
        document.write(`|&#160;&#160;&#160;&#160;`)
        for (j = 1; j<=7; j++)
        {
            if ((i*7)+j < 10)
            {
                document.write(`|&#160;${(i*7)+j}&#160;&#160;&#160;&emsp;&emsp;&emsp;&emsp;`)
            }
            else
            {
                document.write(`|&#160;${(i*7)+j}&#160;&emsp;&emsp;&emsp;&emsp;`)
            }
        }
        document.write(`|<br/>`);

        document.write(`|&#160;${i+1}&#160;`)
        for (j = 1; j<=7; j++)
        {
            document.write(`|&#160;${events[(i*7)+j]}`)
        }
        document.write(`|<br/>`);

        document.write(`|&#160;&#160;&#160;&#160;`)
        for (j = 1; j<=7; j++)
        {
            document.write(`|&#160;&#160;&emsp;&emsp;&emsp;&emsp;&emsp;`)
        }
        document.write(`|&#160;<br/>`);

        for (j = 1; j < 126; j++)
        {
            document.write(`-`)
        }
        document.write(`<br/>`)
    }
}