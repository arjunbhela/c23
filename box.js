class Box {
    constructor(x,y,w,h) {

       var options  = {
           restitution:0.7,
           friction:0.3,
           density:0.4
       }
this.body=Bodies.rectangle(x,y,w,h,options);
this.width = w;
this.height = h;
World.add(world,this.body)
    }
    display() {
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }

}