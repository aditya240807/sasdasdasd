class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async Login() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
    }
    Select(){
        
        background(background1)
        image(form.image,displayWidth / 2 - 500, displayHeight / 2 - 350, 300, 400)
        image(form.image2,displayWidth / 2 + 200, displayHeight / 2 - 350, 300, 400)
        form.hide()
        form.gameMode1.position(displayWidth/2-400,displayHeight/2+70)
        form.gameMode2.position(displayWidth/2+300,displayHeight/2+70)
        form.gameMode1.mousePressed(()=>{
            game.update(2)
            form.gameMode1.hide()
            form.gameMode2.hide()
            form.greeting.hide()
            form.CONTINUE.hide()
            background(background2)
            form.pick.hide()
        })
        form.gameMode2.mousePressed(()=>{
            game.update(3)
            form.gameMode1.hide()
            form.gameMode2.hide()
            form.greeting.hide()
            form.CONTINUE.hide()
            background(background3)
        })
        
    }
   coinCollect(){
        background(background2)
        if(World.frameCount%60===0){
            var coin = createSprite(random(100,500),random(10,600),100,100)
            coin.addImage(image3)
            coin.scale=0.1
            coin.velocityX=random(-10,10)
            coin.velocityY=random(-10,10)
            coin.addToGroup(coinGroup)
             //console.log(coin.x)
            
        }
        if (playersCoinCollect!==undefined){
            var index = 0;

        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in playersCoinCollect){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          //x = x + 200;
          //use data form the database to display the cars in y direction
          
          //playersCoinCollect[index-1].x = x;
          //playersCoinCollect[index-1].y = y;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            playersCoinCollect[index - 1].shapeColor = "red";
            camera.position.x = playersCoinCollect[index-1].x;
            camera.position.y = playersCoinCollect[index-1].y;
          }
          
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          
          }
          if(keyIsDown(UP_ARROW) && player.index !== null){
            
            player.update();
            console.log(player.index)
          }
        }
        
          
            
        
        
   }
    
   
}