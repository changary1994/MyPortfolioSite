/* function change_text{
    let text = document.getElementsByClassName("welcome");
    let newText = "These are the people who motivate me.";
    document.getElementById("welcome").innerHTML = "hi";
} */

window.onload = function() {
    window.setTimeout(fadein, 1000, "welcome");
    window.setTimeout(fadeout, 3000, "welcome");
    window.setTimeout(changeText, 4100, "welcome");
    window.setTimeout(fadein, 5000, "welcome");
    window.setTimeout(fadein, 5000, "topnav");
    window.setTimeout(fadein, 5500, "topImage");
    window.setTimeout(fadein, 6000, "leftImage");
    window.setTimeout(fadein, 6500, "rightImage");
    window.setTimeout(fadein, 7000, "bottomImage");
  }
  
  function fadeout(id) {
    document.getElementById(id).style.opacity = '0';
  }

  function fadein(id){
    document.getElementById(id).style.opacity = '1';
  }

  function changeText(id){
    document.getElementById(id).innerHTML = "There are the people who motivate me.";
  }