iterate:
 for(let i= 0 ;i<10;i++)
 {
    for(let j = 0;j<=5;j++)
    {
        console.log(i+j);
        if(j==3)
        {
            continue iterate;
        }
    }
 }