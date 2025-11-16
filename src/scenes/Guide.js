export class Guide extends Phaser.Scene {
    constructor() {
        super('Guide');
    }

    create() {
        //Create background
        this.add.image(521, 369, 'background');

        //Create Guide text
        this.add.text(521, 200, 'Drag the same Shape into the Blank', {fontSize: '35px', color: "#000000"}).setOrigin(0.5);

        //Create Arrow
        this.add.image(521, 500, 'arrow').setScale(0.3);

        //Create Blank Circle
        const blankCircle = this.add.image(750, 450, 'circle').setScale(0.8).setTintFill(0x4d4b46);

        //Create Circle Shape
        const circle = this.add.image(300, 450, 'circle').setScale(0.8);
        circle.setInteractive({draggable: true});
        circle.on('drag', (pointer, dragX, dragY) => circle.setPosition(dragX, dragY));
        circle.on('dragend', () => {
            const distance = Phaser.Math.Distance.Between(circle.x, circle.y, blankCircle.x, blankCircle.y);
            if (distance < 80){
                this.onCorrectMatch(circle, blankCircle);
            }
        });    
    }

    onCorrectMatch(shape, blank){
        shape.setPosition(blank.x, blank.y);
        shape.disableInteractive();
        this.add.text(521, 400, 'Correct', { fontSize: '50px', fill: '#03ff2d' }).setOrigin(0.5);
        this.time.delayedCall(2000, () => {
            this.scene.start('Start');
        });
    }

}
