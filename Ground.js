class Ground {

    constructor(x,y,w,h){
    
        var abc = {
            isStatic : true
        }

        this.body=Bodies.rectangle(x,y,w,h,abc);
        this.w=w;
        this.h=h;
        World.add(myworld,this.body)
        
    }

    display(){

        var pos=this.body.position;
        
        push("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}
