class Chain{
constructor(body1,body2) {
var options= {
bodyA: body1, 
bodyB: body2,
stiffness: 0.04
//length: 10
}
       
this.Chain= Constraint.create(options);
World.add(world, this.Chain)
}
display() {
    var startingpoint= this.Chain.bodyA.position
    var endingpoint= this.Chain.bodyB.position
    strokeWeight(4);
    line(startingpoint.x, startingpoint.y, endingpoint.x, endingpoint.y)
}
}