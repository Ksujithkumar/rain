class Rain{
    constructor(x,y){
        var options ={
            'restitution':0.1,
            'friction':0.001,
        }
        this.body = Bodies.circle(x,y,4,options)
        this.x = x;
        this.y =y;
        this.radius =4;

        World.add(world,this.body)
    }

    drope(){
     if(this.body.position.y > height ){
      Matter.Body.setPosition(this.body, {x:random(0,1200),y:random(0,700)})
     }
    }
    display(){
        var pos =this.body.position
        var radius =radius

        ellipseMode(CENTER)
        fill("blue")
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}