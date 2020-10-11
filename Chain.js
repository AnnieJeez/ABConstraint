class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            pointA : {x: mouseX, y: mouseY},
            // stiffness: 2,
            length: 100
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){

        if(this.chain.bodyA){
            var pointA = {x: mouseX, y: mouseY};
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

        
    }

    fly(){
        if(this.chain.bodyA){
            this.chain.pointA= {x: mouseX, y: mouseY};
            var slope = (this.chain.pointB.y-this.chain.pointA.y)/(this.chain.pointB.x-this.chain.pointA.x)
            console.log("Slope "+slope);
            var a = this.chain.pointB.x-this.chain.pointA.x;
            var b = this.chain.pointB.y-this.chain.pointA.y;
            
            var c = Math.sqrt( a*a + b*b );
            console.log("Distance "+c);
            var forceX = c*4;
            var forceY = slope * forceX;
            this.chain.bodyA = null;
            Matter.Body.setDensity(bird.body, 1.5)
            Matter.Body.setPosition(bird.body,this.chain.pointA);
            Matter.Body.applyForce(bird.body,this.chain.pointA,{x:forceX,y: forceY});

        }

    
    
        
    }
    
}