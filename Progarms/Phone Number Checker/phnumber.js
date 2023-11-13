function prime()
{
    let count;
let num=document.getElementById('num').value;
let len=num.length;
let first=Math.trunc(num/1000000000);
if(num==='')
{
    document.getElementById('out').innerHTML= "Enter The Phone Valid number";
    document.getElementById('num').focus();
    return;
}
if(len!=10)
{
        document.getElementById('out').innerHTML= "Invalid Phone Number(Should be 10 digits)";
        document.getElementById('num').focus();
        return;
}
if(first>=6 && first<=9)
{         //document.getElementById('out').innerHTML= first;
        document.getElementById('out').innerHTML= "Valid Phone Number";
        return;
}
else
    {
        document.getElementById('out').innerHTML= "Invalid Phone Number(Check Number 10)";
        document.getElementById('num').focus();
        return;
    }
}
