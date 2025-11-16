// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.setPath('assets');
        this.load.image('background','background.png');
        this.load.image('start','start.png');
        this.load.image('guide', 'guide.png');
        this.load.image('shapefun','shapefun.png');
        this.load.image('arrow', 'arrow.png');

        //Load Shape image
        this.load.image('heptagon','heptagon.png');
        this.load.image('heart','heart.png');
        this.load.image('cross','cross.png');
        this.load.image('circle','circle.png');     
    }

    create(){
        this.scene.start('Start');      
    }
}
