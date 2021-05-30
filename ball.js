class Ball {
    constructor(x, y, width, height) {
      var options = {
    'isStatic':false,
		'restitution':0.3,
		'friction':0.5,
		'density':1.2
         }
      this.image = loadImage("pictures/paper.png");
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
     push ()
     translate(pos.x, pos.y)
      imageMode(CENTER);
      fill("red");
      image(this.image,0, 0, this.width, this.height);
      pop ()
    }
  };