function L (){
    p1 = document.getElementById("t1").value;
    p2 = document.getElementById("t2").value;
    localStorage.setItem("player_1", p1);
    localStorage.setItem("player_2", p2);
    window.location = "GP.html"
   }