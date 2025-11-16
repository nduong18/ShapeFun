// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    init() {
        this.score = 0;
    }

    preload() {
        // Load assets
    }

    create() {
        //Create background
        this.add.image(521, 369, 'background');

        //Create Blank Shape
        const blankCircle = this.createBlankShape(200, 500, 'circle', 0.8);
        const blankCross = this.createBlankShape(400, 500, 'cross', 0.8);
        const blankHeart = this.createBlankShape(600, 500, 'heart', 0.8);
        const blankHeptagon = this.createBlankShape(810, 500, 'heptagon', 0.8);

        //Create Shape Image
        const circle = this.createShape(600, 200, 'circle', 0.8, blankCircle);
        const cross = this.createShape(810, 200, 'cross', 0.8, blankCross);
        const heart = this.createShape(200, 200, 'heart', 0.8, blankHeart);
        const heptagon = this.createShape(400, 200, 'heptagon', 0.8, blankHeptagon);       
    }

    createBlankShape(x, y, key, scale){
        const blank = this.add.image(x, y, key).setScale(scale).setTintFill(0x4d4b46);
        return blank;
    }

    createShape(x, y, key, scale, blank){
        const shape = this.add.image(x, y, key).setScale(scale);
        shape.setInteractive({draggable: true});
        shape.on('drag', (pointer, dragX, dragY) => shape.setPosition(dragX, dragY));
        shape.on('dragend', () => {
            const distance = Phaser.Math.Distance.Between(shape.x, shape.y, blank.x, blank.y);
            if (distance < 80){
                this.onCorrectMatch(shape, blank);
            }
            
        });
        return shape;
    }

    onCorrectMatch(shape, blank){
        this.score += 1;
        shape.setPosition(blank.x, blank.y);
        shape.disableInteractive();

        if (this.score === 4) {
            this.add.text(521, 300, 'Correct', { fontSize: '50px', fill: '#03ff2d' }).setOrigin(0.5);
            this.time.delayedCall(2000, () => {this.scene.start('Start');})
        }
    }
}
