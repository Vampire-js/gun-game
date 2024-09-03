import { c } from "../app.js"
import { Box } from "../primitives/Box.js"


export class World {
    constructor(c){
        this.c = c
        this.entities = new Array()
    }
    create(){
        const box = new Box()
        
        this.entities.push(box)
        this.entities.map(entity => entity.draw())
    }
    update(){
   
        this.c.fillStyle = "white"
        this.c.fillRect(0, 0, canvas.width, canvas.height)

        this.create()
        this.entities.map(entity => {
            entity.update()
        })
    }
}