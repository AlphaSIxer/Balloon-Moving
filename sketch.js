var bach;
var laz;
var db;
var store;
var bull;
function preload(){
laz=loadImage("hotairballoon1.png")
}

function setup() {
  createCanvas(1600,900);
bach=createSprite(600, 600, 50, 50);
bach.addImage("shite", laz)
db=firebase.database()
db.ref("Ballon/Position").on("value",function(data){
store=data.val();
bach.x=store.x
bach.y=store.y}

)
}

function draw() {
  background(0);
  if(keyDown("RIGHT")){
    drive(1,0);
    }  
  drawSprites();
}

function drive(x,y){
  db.ref("Ballon/Position").update({x:bach.x+x,y:bach.y+y})

}