class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    
        
    display(){
        var posA = this.chain.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(posA.x, posA.y, pointB.x, pointB.y);
    }
    
fly(){
        this.chain.bodyA = null
    }
}