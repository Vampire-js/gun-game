export class ScatterOnPoints {
    constructor(obj, scatterer){
    this.obj = obj
    this.scatterer = scatterer       
    this.instances = new Array()
    }
    init(){
        this.scatterer.map(e => {
            e.obj = this.obj
        })
    }
}