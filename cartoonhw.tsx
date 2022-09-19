function draw() {
    let canvas = document.getElementById("mycanvas");
    let context = canvas.getContext("2d");
    //this creates the background of the canvas
    context.fillStyle = "cyan";
    context.fillRect(0, 0, canvas.width, canvas.height);
    //draws the the square section of the home
    context.fillStyle = "tan";
    context.beginPath();
    context.moveTo(300, 250);
    context.lineTo(500, 250);
    context.lineTo(500, 450);
    context.lineTo(300, 450);
    context.fill();
    //this clears the shapes of the sections of the home
    context.clearRect(375, 370, 50, 80);
    context.clearRect(325, 295, 35, 35);
    context.clearRect(440, 295, 35, 35);
    //adds detail to the sections of the home
    //draws the first window
    context.beginPath();
    context.moveTo(343, 295);
    context.lineTo(343, 330);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(325, 313);
    context.lineTo(360, 313);
    context.strokeStyle="black";
    context.stroke();
    //draws the second window
    context.beginPath();
    context.moveTo(458, 295);
    context.lineTo(458, 330);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(440, 313);
    context.lineTo(475, 313);
    context.strokeStyle="black";
    context.stroke();
    //draws the doorknob
    context.beginPath();
    //arc syntax = x value, y value, radius, angleR, angleE. Set angleS to 0 and angleE (start and end angle) to (Math.PI * 2) for a circle.
    context.arc(415, 415, 5, 0, Math.PI * 2);
    context.stroke();
    //draws the shape of roof
    context.fillStyle = "#E18A78";
    context.beginPath();
    context.moveTo(300, 250);
    context.lineTo(500, 250);
    context.lineTo(400, 170);
    context.fill();
    //draws the clouds (background objects)
    context.fillStyle = "#FFFFFF";
    context.beginPath();
    context.ellipse(90, 60, 50, 75, Math.PI/2, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(290, 60, 50, 75, Math.PI/2, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(500, 60, 50, 75, Math.PI/2, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(710, 60, 50, 75, Math.PI/2, 0, Math.PI * 2);
    context.fill();
    //draws the ground
    context.fillStyle = "#6E4C0D";
    context.fillRect(0, 450, canvas.width, 600);
    //for loop to draw the grass
    context.fillStyle = "#27F506";
    for (let i = 0; i < canvas.width; i += 5)
    {
        let w = i;
        context.beginPath();
        context.moveTo(w, 450);
        context.lineTo(w, 425)
        context.lineTo(w+2, 425);
        context.lineTo(w+2, 450);
        context.fill();
    }
    //add caption to canvas
    context.fillStyle = "black";
    context.font = "bold 18px Arial";
    context.fillText("My Humble Abode", canvas.width / 2 - 80, 525);
}


document.addEventListener('DOMContentLoaded', draw);