class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
   // this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton('Refresh')
  }
  hide(){
    //this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background(formbg)

    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    
    //this.button.fill(rgb(255,0,0))
    
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.input.size(150,30)
    //fill(rgb(165,200,100))
    //textSize(100)
    this.button.style('color:red')
    this.button.position(displayWidth/2 -13, displayHeight/2);
    this.button.size(100,50)
    this.reset.position(100,20)
    //this.button.style.background='#3dfe3a'
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      fill(rgb(255,0,0))
      textSize(80)
      text("Hello " + " " +player.name+ ","+" "+"Waiting for other players to join...",displayWidth/2-800, displayHeight/4)
      
      //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      //player.updatecarsatend(0)
      //player.update()
      game.update(0)
    })

  }
}
