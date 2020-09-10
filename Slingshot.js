class Slingshot {
    constructor(body1,point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.04,
            length : 10
        }

        this.pointB = point2;
    
        this.sling = Matter.Constraint.create(options);
         World.add(world,this.sling);
    
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        

    }

    fly(){
        this.sling.bodyA = null;
    }

}