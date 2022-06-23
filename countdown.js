const countdown = num =>
{
    for (i = num - 1; i >= 0; i--)
    {
        if (i > 0)
        {
            console.log(i)
        }
        else
        {
            console.log("DONE")
        }
    }
}

countdown(4)