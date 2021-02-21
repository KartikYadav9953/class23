class ground {

constructor() {

var op = {
 
    isStatic : true

}




this.body = Bodies.rectangle(200,390, 400, 20, op)
World.add(world, this.body);


}


display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
    fill("brown");
    rect(pos.x, pos.y, 400, 20);
    pop();
  }





}