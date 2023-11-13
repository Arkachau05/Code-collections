function prime()
{
let num=document.getElementById('num').value;

if(num==='')
{
    document.getElementById('out').innerHTML= "Enter a number";
    document.getElementById('name').focus();
    return;
}
if(num<1)
{
    document.getElementById('out').innerHTML= "Enter a positive Number";
    document.getElementById('name').focus();
    return;
}
if(num== 1)
{
    document.getElementById('out').innerHTML="Not Prime NUmber";
    return;
}
if (num < 2)
{
document.getElementById('out').innerHTML= "Not a prime";
return;
}
for (let i = 2; i < num; i++) 
{
if (num % i === 0) {
    return document.getElementById('out').innerHTML= "Not a prime";
}
}
return document.getElementById('out').innerHTML= "prime";
}