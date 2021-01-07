class slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:100
        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
            var pointB=this.pointB
            
            stroke("red")
            strokeWeight(7)
            fill("red")
            
            
            
            
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            
        }
    }
}