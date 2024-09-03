import { c } from "../app.js";
import { Entity } from "../js/Entity.js";
import { Vector2d } from "../utils/utils.js";

export class KineticPlayer extends Entity{
    constructor(position = new Vector2d(0,0), size = new Vector2d(100,100)){
        super(position)
        this.size = size
        this.c = c
        this.src = ""

        this.draw()
    }
    draw(){
        this.c.save()
        this.c.translate(this.position.x - 10  +this.size.x/2, this.position.y + this.size.y/2)
        this.c.rotate(this.angle)
        this.c.drawImage(this.getImage(), -this.size.x/2,-this.size.y/2, this.size.x, this.size.y)

        this.c.restore()
    }
    getImage(){
        let img = new Image()
        img.src = this.src
        return img
    }
    update(){
        
        this.applyPhysics()
   
        this.draw()
  
    }
}