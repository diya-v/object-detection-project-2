status="";

function preload(){
    img = loadImage("living space.jpg");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Detecting Object";
}

function modelLoaded(){
    console.log("model loaded");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
    console.log(results);
    }
}