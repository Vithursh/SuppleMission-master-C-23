class Basket{
        constructor(x,y,Width,height){
            var options = {  
                isStatic: true
            }
            this.body = Bodies.rectangle(x,y,Width,height,options);
            this.Width = Width;
            this.height = height;
            World.add(world,this.body)
        
        }
    
    
    display(){
        var Pos = this.body.position
        rectMode(CENTER);
        fill("Blue");
        rect(Pos.x,Pos.y,this.Width,this.height)
    }
    }

