function validate()
{
    if(document.forms["log"]["name"].value=="")
     {alert("enter name");
     return false;
     }
    else if(document.forms["log"]["gender"].value=="")
     {alert("select gender");
     return false;
     }
     else if(document.forms["log"]["course"][0].checked==false & document.forms["log"]["course"][1].checked==false & document.forms["log"]["course"][1].checked==false)
     {
         alert("select course");
     return false; 
    }
    else if(document.forms["log"]["number"].value=="")
    { alert("enter no.");
     return false;
    } 
    else
       return true;
} 

function cal()
{
    if(document.forms["marks"]["eng"].value=="" || document.forms["marks"]["gk"].value=="" || document.forms["marks"]["math"].value=="")
       {
           alert("enter all sub marks !!!!!");
       }
   else
     {var a=document.forms["marks"]["eng"].value;
     var b=document.forms["marks"]["gk"].value;
     var c=document.forms["marks"]["math"].value;
     var d=parseInt(a)+parseInt(b)+parseInt(c);
     var e=parseFloat(d/3).toFixed(2);
         document.getElementById("total").value=d;
         document.getElementById("percent").value=e+'%';
         if(b>a & b>c)
         document.getElementById("highest").value=b;  
          else if(a>b & a>c)
          document.getElementById("highest").value=a;
         else
         document.getElementById("highest").value=c;             
     }
  return false;   
}
function nameval()
{
if(document.forms["log"]["name"].value.match(/[0-9]/))
    {
        document.getElementById("nw").innerHTML="invalid name";     
    }
    else
    document.getElementById("nw").innerHTML=" ";
}