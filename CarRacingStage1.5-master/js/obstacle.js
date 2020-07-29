class Obstacle{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
       // this.randomx= random()
        //this.randomy=random(displayHeight/2,displayHeight)
    }
    display(){
        image(obimg,this.x,this.y,this.width,this.height)
    }
}