var i = 0;
var j = 0;

document.write("\n")
for (i = 1; i < 282; i++)
{
    document.write("=")
}

document.write("\n| W |\t\t   Monday   \t\t|\t\t Tuesday  \t\t|\t\tWednesday\t\t|\t\tThursday\t\t|\t\t  Friday  \t\t|\t\tSaturday\t\t|\t\t  Sunday   \t\t|\n");

for (i = 1; i < 282; i++)
{
    document.write("=")
}
document.write("\n")

for (i = 0; i<5; i++)
{
    document.write(`|   `)
    for (j = 1; j<=7; j++)
    {
        document.write(`| ${(i*7)+j} \t\t\t\t`)
        if (j > 1)
        {
            document.write("\t")
        }
    }
    document.write(`| \n`);

    document.write(`| ${i+1} `)
    for (j = 1; j<=7; j++)
    {
        document.write(`| ${events[(i*7)+j]} \t\t\t\t        `)
    }
    document.write(`| \n`);

    document.write(`|   `)
    for (j = 1; j<=7; j++)
    {
        document.write("| \t\t\t\t        ")
    }
    document.write(`| \n`);

    for (j = 1; j < 282; j++)
    {
        document.write("-")
    }
    document.write("\n")
}