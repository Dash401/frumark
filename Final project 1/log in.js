function validateform()
{
    var x=document.forms["myform"]["myname"].value;
    if(x=="")
    {
        alert("you have entered empty string")
    }
    return false;

}
{
    var y=document.forms["myform"]["myemail"].value
    if(y==" ")
    {
        alert("you have entered empty string")
    }
}
{
    var z=document.forms["myform"]["mypassword"].value
    if(z==" ")
    {
        alert("you have entered empty string")
    }
}
{
    var a=document.forms["myform"].value
   if( x!=" " & y!=" " & z!=" " )
   { alert("Very good")
}

}