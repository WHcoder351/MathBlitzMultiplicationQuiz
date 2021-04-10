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
       localStorage.setItem("No.1", n1);
       localStorage.setItem("No.2", n2);
   }

   function B(){
       window.location = "index.html";
   }