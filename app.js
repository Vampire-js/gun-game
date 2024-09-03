import { TopdownController } from "./controllers/TopdownController.js"
import { Scatter } from "../js/Scatter.js"
import { KineticPlayer } from "./primitives/KineticPlayer.js"
import { Vector2d } from "./utils/utils.js"

const canvas = document.getElementById("canvas")
canvas.height = innerHeight
canvas.width = innerWidth
export const c = canvas.getContext("2d")
const minimap = document.getElementById("minimap")
minimap.height = innerHeight * 2
minimap.width = innerHeight * 2
const cm = minimap.getContext("2d")

const entities = []
const player = new KineticPlayer()
player.src = "assets/Cannon.svg"
player.size.set(145 * 1.2, 110 * 1.2)

player.position.set(canvas.width / 2 - player.size.x / 2, canvas.height / 2 - player.size.x / 2)




const grass = new Image()
grass.src = "assets/Grass.svg"

const GrassScatter = new Scatter(grass, 300, new Vector2d(40, 40), new Vector2d(0, 0))

const ground = new Image()
ground.src = "assets/Ground.svg"

const GroundScatter = new Scatter(ground, 50, new Vector2d(40, 40), new Vector2d(0, 0))

const pond = new Image()
pond.src = "assets/Pond.svg"
const PondScatter = new Scatter(pond, 4, new Vector2d(400, 400), new Vector2d(0, 0))


const pickables = new Image()
pickables.src = "assets/BoxAsset.svg"

const Pickable = new Scatter(pickables, 5, new Vector2d(100, 100), new Vector2d(0, 0))


// PondScatter.width = 200

entities.push(PondScatter)
entities.push(Pickable)
entities.push(GrassScatter)
entities.push(GroundScatter)

const controller = new TopdownController(player, entities)


// cm.drawImage(canvas, 0, 0)



const animate = () => {

    requestAnimationFrame(animate)

    // c.strokeStyle = "black"
    // c.lineWidth = 20
    // c.strokeRect(0, 0, canvas.width, canvas.height)


    c.fillStyle = "white"
    c.fillRect(-canvas.width * 50, -canvas.height * 50, canvas.width * 100, canvas.height * 100)



    GroundScatter.update()
    GrassScatter.update()
    PondScatter.update()
    Pickable.update()


    controller.update()
    player.update()

    // bullet.update()

    // cm.drawImage(canvas, 0, 0)


}

animate()