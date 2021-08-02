function L (){
    p1 = document.getElementById("t1").value;
    p2 = document.getElementById("t2").value;
    localStorage.setItem("player_1", p1);
    localStorage.setItem("player_2", p2);
    window.location = "GP.html"
   }
   function N(){
       n1 = document.getElementById("n1").value;
       n2 = document.getElementById("n2").value;
AcA = parseInt(n1) * parseInt(n2);
Qn = "<h4>" + n1 +" times " + n2 + "</h4>"
In = "<br>Answer: <input type = 'text' id = 'icb'>";
Cb = "<br><br><button class = 'btn btn-danger' onclick='check()'>Check</button>"
row = Qn + In + Cb
document.getElementById("qD").innerHTML = row;
document.getElementById("n1").value = "";
document.getElementById("n2").value = "";
   }

   function B(){
       window.location = "index.html";
   }