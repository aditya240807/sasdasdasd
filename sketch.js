var gameState = 0;
var playerCount;
var allPlayers;
var database;
var player1,player2,player3,player4
var form, player, game
var playersCoinCollect = []
function preload(){
  background1=loadImage("BACKGROUND.jpg")
  background2=loadImage("openfieldgrass.jpg")
  background3=loadImage("track.png")
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.Login();
  coinGroup = createGroup()
  image3 = loadImage("money.png")
}

function draw() {
  background(background1)
  
  if(gameState === 1){
    clear();
    game.Select();
  }
  
  if(gameState===2){
    background(background2)
    player1 = createSprite(800,400,50,50)
    player2 = createSprite(800,450,50,50)
    playersCoinCollect.push(player1)
    playersCoinCollect.push(player2)
    if(playerCount===2){
      game.coinCollect()
      player1.x=mouseX
      player1.y=mouseY
      //console.log("COINCOLLECT")
      
    }
      
    
    
  }
  if(gameState===3){
    background(background3)
  }
  drawSprites();
}