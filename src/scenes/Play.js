class Play extends Phaser.Scene {
    constructor() {
        // name of scene to phaser
        super("playScene")
    }

    init(stats) {
        console.log("play: init")
        this.HP = stats["HP"]
        this.EXP = stats["EXP"]
    }

    create() {
        console.log("play created")
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)
    }
}
