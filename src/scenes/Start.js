// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Start extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    create() {
        this.add.image(521, 369, 'background');
        this.add.image(521, 300, 'shapefun').setScale(0.8);

        const startButton = this.add.image(521, 470, 'start').setScale(0.5).setInteractive();
        startButton.on('pointerdown', () => {
            //Change color startButton
            startButton.setTint(0x777777);
            this.time.delayedCall(200, () => {
                this.scene.start('Game');
            });
        });

        const guideButton = this.add.image(523, 580, 'guide').setScale(0.15).setInteractive();
        guideButton.on('pointerdown', () => {
            guideButton.setTint(0x777777);
            this.time.delayedCall(200, () => {
            this.scene.start('Guide');
            });
        });
    }

}
