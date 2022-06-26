let size = 10

//string.repeat() method
for (let i = 0; i < size; i++)
{
  if (i % 2 == 0)
  {
    let str = "# "
    console.log(str.repeat(size));
  } else
  {
    let str = " #"
    console.log(str.repeat(size));
  }
}

//for loop method

for (let i = 0; i < size; i++)
{
  if (i % 2 == 0)
  {
    let str = "# "
    let multstr = ""
    for (j = 0; j < size; j++)
    {
      multstr += str
    }
    console.log(multstr)
  } else
  {
    let str = " #"
    let multstr = ""
    for (j = 0; j < size; j++)
    {
      multstr += str
    }
    console.log(multstr)

  }
}

