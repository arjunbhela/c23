class Ground {
    constructor(x,y,w,h) {
        var optionsg ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,optionsg)
this.height = h;
this.width = w;
World.add(world,this.body)
    }
display() {
 rectMode(CENTER) 
 rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}