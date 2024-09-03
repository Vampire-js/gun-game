import { c } from "../app.js";
import { Entity } from "../js/Entity.js";
import { Vector2d } from "../utils/utils.js";

export class Circle extends Entity{
    constructor(position = new Vector2d(10,10), rad = 10){
        super(position)
        this.rad = rad
        this.c = c
        this.color = "red"
        this.draw()
    }
    draw(){
        
        c.beginPath()
        c.arc(this.position.x, this.position.y,this.rad,0,Math.PI*2 )
        c.strokestyle = this.color
        c.stroke()
       
    }
    update(){
        this.applyPhysics()
        this.draw()
    }
}