/* function change_text{
    let text = document.getElementsByClassName("welcome");
    let newText = "These are the people who motivate me.";
    document.getElementById("welcome").innerHTML = "hi";
} */

window.onload = function() {
    window.setTimeout(fadein, 1000, "inspiration");
    window.setTimeout(fadein, 1000, "topnav");
    window.setTimeout(fadein, 1500, "topImage");
    window.setTimeout(fadein, 2000, "leftImage");
    window.setTimeout(fadein, 2500, "rightImage");
    window.setTimeout(fadein, 3000, "bottomImage");
  }
  
  function fadeout(id) {
    document.getElementById(id).style.opacity = '0';
  }

  function fadein(id){
    document.getElementById(id).style.opacity = '1';
  }

