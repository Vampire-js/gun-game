import { c } from "../app.js"
import { Vector2d } from "../utils/utils.js"

export class ScatterPoints {
    constructor(sprite){
        this.sprite = sprite //Image
        this.width = 2000 
        this.height = 2000 
        this.particles = new Array()
        this.amount = 200
 
        for(let i = 0; i<this.amount; i++){
            let pos = new Vector2d(Math.random()*this.width , Math.random()*this.height)
            this.particles.push({
                x:pos.x,
                y:pos.y
            })
        }

    }

}