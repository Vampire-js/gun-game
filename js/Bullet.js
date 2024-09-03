import { KineticPlayer } from "../primitives/KineticPlayer.js";
import { Vector, Vector2d } from "../utils/utils.js";
import { Entity } from "./Entity.js";

export class Bullet {
    constructor(parent){
        this.bullet = new KineticPlayer(parent.position.reflect().add(Math.cos(parent.angle) * 30 ,Math.sin(parent.angle) * 30))
        this.parent = parent
        this.bullets = []
    this.init()
    }
    init(){
       
        // this.bullet.angle = this.parent.angle
        this.bullet.src = "assets/Bullet.svg"
        this.bullet.size.set(80,80)
        this.bullet.draw()

      
    }
    update(){
        this.init()
        this.bullet.update()
    }
}