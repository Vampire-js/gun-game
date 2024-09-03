import { c } from "../app.js"
import { Bullet } from "../js/Bullet.js"
import { Vector, Vector2d } from "../utils/utils.js"

export class TopdownController {
    constructor(player, entities) {
        this.player = player
        this.rotationSpeed = 0
        this.ROT_SPEED = .03
        this.loader = null
        this.SPEED = 5
        this.range = 300
        this.bulletsCounter = document.getElementById("bullets")
        this.bullets = []
        this.entities = entities
        this.init()
    }
    init() {


        if (this.player.speed != 0) {
            c.translate(-this.player.facing.x * this.SPEED, -this.player.facing.y * this.SPEED)
        }

        document.onkeydown = key => {
            console.log(key.key)
            switch (key.key) {
                case "d":
                    this.rotationSpeed = this.ROT_SPEED
                    break;
                case "a":
                    this.rotationSpeed = -this.ROT_SPEED
                    break;
                case "s":

                    c.fillStyle = "white"
                    c.fillRect(0, 0, canvas.width, canvas.height)


                    this.player.speed = this.SPEED
                    break;
                case "w":
                    let bullet = new Bullet(this.player)
                    bullet.bullet.angle = this.player.angle
                    bullet.bullet.speed = 10
                    this.bulletsCounter.innerHTML -= 1
                    console.log(this.bulletsCounter.innerHTML)
                    if (this.bulletsCounter.innerHTML >= 0) {
                        this.bullets.push(bullet)
                    } else {
                        this.bulletsCounter.innerHTML = 0

                    }
                    break;
            }

        }

        document.onkeyup = key => {
            switch (key.key) {
                case "s":
                    this.player.speed = 0
                    break;
                case "a":
                    this.rotationSpeed = 0
                    break

                case "d":
                    this.rotationSpeed = 0
                    break
            }
        }

    }

    update() {
        this.init()

        this.player.angle += this.rotationSpeed


        this.bullets.map((bullet, index) => {
            if (Vector.dist(bullet.bullet.position, this.player.position) >= this.range) {
                this.bullets.splice(index, 1)
                console.log("yes")
            }
        })

        this.bullets.map(e => e.update())
    }
}
