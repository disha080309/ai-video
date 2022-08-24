video=" ";
status1=" ";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

}
function preload(){
    video=createVideo("video.mp4");
    video.hide()
}
function draw(){
    image(video,0,0,600,500);
    console.log("disha")
}
function start(){
    Object_detector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects"
}
function modelLoaded(){
    console.log("Model Has Been Loaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}