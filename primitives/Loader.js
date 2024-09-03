import { c } from "../app.js";
import { Entity } from "../js/Entity.js";
import { Vector2d } from "../utils/utils.js";

export class Loader extends Entity {
    constructor(position = new Vector2d(20, 20)) {
        super(position)
        this.progress = 0.5
        this.width = 300
        this.height = 40

        this.borderColor = "black"
        this.loaderColor = "black"

        this.init()
    }
    init() {
        c.beginPath()
        c.strokeStyle = this.borderColor
        c.rect(this.position.x, this.position.y, this.width,
            this.height
        )
        c.stroke()

        c.fillStyle = this.loaderColor
        c.fillRect(this.position.x, this.position.y, this.progress * this.width, this.height)

        if(this.progress >= 0.99 ){
            this.progress = 1
        }
        if(this.progress <= 0){
            this.progress = 0
        }

    }
    update() {
        this.init()
    }

}