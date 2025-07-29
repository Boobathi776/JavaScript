// falsy values in JS are false , 0 , null , "" , undefined , NaN everything else is truthy.
if(false)
{
  console.log("i can't work");
}
else
{
  console.log("defenitly i will work");
}

// null
if(null)
{
  console.log("i can't work");
}
else
{
  console.log("defenitly i will work");
}

// 0
if(0)
{
  console.log("i can't work");
}
else
{
  console.log("defenitly i will work");
}

// " " empty string
if("")
{
  console.log("i can't work");
}
else
{
  console.log("defenitly i will work");
}

// undefined variable
let a;
if(a)
  {
    console.log("in a there is a value present");
  }
  else 
  {
    console.log("There is no value in variable a");
  }

// NaN
console.log(0/0);
console.log(Number("vanakam"));
if(0/0)
{
  console.log('valid value');
}
else 
{
  console.log("invalid value");
}

