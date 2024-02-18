img=""
status1=""
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "status : detecting objects";
}
function preload()
{
  img=loadImage("dog_cat.jpg")
}
function draw()
{
    image(img,0,0,640,420);
    fill("#48C9B0");
    text("Dog",45,75);
    noFill();
    stroke("#B69A27");
    rect(30,60,450,350);
    fill("#48C9BO");
    text("Cat",320,120);
    noFill();
    stroke("##8C22AB");
    rect(300,90,370,320);
}
function modelLoaded()
{
    console.log("model loaded");
    status1 =true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
  if(error)
  {
    console.log(error);
  }
  console.log(results);
}
