import { Vector, Vector2d } from "../utils/utils.js"

export class Entity {
    constructor(position){
        this.position = position
        this.speed = 0
        this.facing = new Vector2d(1,0)
        this.angle = 0
    }
    applyPhysics(){
        this.velocity = Vector.mult(this.facing, this.speed)
        this.facing = Vector.rot(this.angle)
        // console.log(this.velocity)
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}