img="";
status="";
object=[];


function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function draw(){
    r=random(255);
g=random(255);
b=random(255);
    image(video,0,0,380,380);
    if(status !=""){
        objectDetector.detect(video, gotResult);
for(i=0;i<object.length;i++){
    fill(r,g,b);
    persent=floor(object[i].confidence*100);
    text(object[i].label+" "+persent+"%",object[i].x+20,object[i].y+20);
    noFill()
    stroke(r,g,b);
    rect(object[i].x-30,object[i].y,object[i].width+100,object[i].height);
    document.getElementById("status").innerHTML="OBJECT DETECTED";
    document.getElementById("hmm_I_found").innerHTML="Object found"+object.length;
}}
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
function gotResult(error,result){
if(error){
    console.error(error);
}
console.log(result)
object=result;
}