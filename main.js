canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 2;
var last_x;
var last_y;
width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart() {
color = document.getElementById("color").value;
width = document.getElementById("width").value;

last_x =e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;


}


canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e) {
    console.log("touchmove");
    current_x =e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last_position_of_x_and_y_coordinates=" + last_x +"," + last_y);
        ctx.moveTo(last_x,last_y);
        console.log("current_position_of_x_and_y_coordinates=" + current_x +"," + current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();

    
    last_x = current_x;
    last_y = current_y;

}

function clear1() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}
