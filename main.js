Obj=[];
sta="";

function setup() {
    canvas=createCanvas(480,480);
    canvas.center();
    v=createCapture(VIDEO);
    v.hide();
}
function draw() {
    image(v,0,0,480,480);
    if (sta!="") {
        r=random(255);
        g=random(255);
        b=random(255);
        for (var i = 0; i < Obj.length; i++) {
            document.getElementById('s1').innerHTML="Status -  Objects Detected";
            document.getElementById('s2').innerHTML="Number of objects -" + Obj.length;
            fill(r,g,b);
            noFill();
            stroke(r,g,b);
            textSize(20);
            p=floor(Obj[i].confidence*100);
            text(Obj[i].label + " " + p + "%", Obj[i].x + 10, Obj[i].y + 20);
            rect(Obj[i].x, Obj[i].y,Obj[i].width, Obj[i].height);
            }
    }
}
function start() {
    g1=ml5.objectDetector('cocossd',load);
    document.getElementById("s1").innerHTML="Detecting Objects";
}
function load() {
    console.log("done");
    sta=true;
    g1.detect(v,u);
}
function u(error,result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        Obj=result;
    }
}