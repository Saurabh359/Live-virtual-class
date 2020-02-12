var name="";
var check=1;
        function check()
        {
              var ele = document.getElementsByName('q1'); 
              var ble = document.getElementsByName('q2'); 
                  if(ele[1].checked & ble[2].checked) 
                   alert( name +" your score 4");
                  else if(ele[1].checked | ble[2].checked)
                  alert(name +" your score 2");   
                  else 
                  alert(name +" your score 0");
        }
        function data()
        {
            name=prompt("Enter your name ");
        }
       function search()
       {
          var s=document.getElementById("search").value;
          var a=document.getElementById("site").value;
          window.location.assign("http://"+a+"/search?q="+s);
       } 
       function zoom()
       {if(check==1)
           {document.getElementById("image").style.transform = "scale(1.5)";
             check=2;
           } 
        else
        {
           document.getElementById("image").style.transform = "scale(1)";
          check=1;
        } 
      }