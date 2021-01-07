class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var roofPos =this.body.position;
      
			push()
			translate(roofPos.x, roofPos.y);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop()
    }
  };