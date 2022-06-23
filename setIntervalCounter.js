
let count = 0
const counter = setInterval(() =>
{
    count += 2
    console.log(count)

    if (count == 10)
    {
        clearInterval(counter)
    }
}, 2000)