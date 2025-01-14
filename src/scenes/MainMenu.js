class MainMenu extends Phaser.Scene {
    constructor() {
        super("mainMenu");

    }

    init() {
        console.log("init")
        this.HP = 100
        this.EXP = 0
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)
    }

    create() {
        console.log("scene created")
        let playerStats = {
            HP: this.HP,
            EXP: this.EXP,
        }

        this.scene.start("playScene", playerStats)
    }
}
