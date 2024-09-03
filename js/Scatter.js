import { c } from "../app.js"
import { Vector2d } from "../utils/utils.js"
import { Entity } from "./Entity.js"

export class Scatter extends Entity {
    constructor(sprite, amount, size = new Vector2d(40,40), position){
        super(position)
        this.sprite = sprite //Image
        this.width = 4000 
        this.height = 4000 
        this.particles = new Array()
        this.amount = amount
        this.size = size
 
        for(let i = 0; i<this.amount; i++){
            let pos = new Vector2d(Math.random()*this.width , Math.random()*this.height)
            this.particles.push({
                img:sprite,
                x:pos.x + this.position.x,
                y:pos.y + this.position.y
            })
        }

        this.init()
    }
    init(){
        this.particles.map(e => {
            c.drawImage(e.img, e.x, e.y , this.size.x, this.size.y)
        })
    
    }   
    update(){
        this.init()
    }
}