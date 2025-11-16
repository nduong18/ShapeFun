import { Game } from './scenes/Game.js';
import { Preloader } from './scenes/Preloader.js';
import { Start } from './scenes/Start.js';
import { Guide } from './scenes/Guide.js';

const config = {
    type: Phaser.AUTO,
    title: 'ShapeFun',
    description: '',
    parent: 'game-container',
    width: 1043,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [
        Preloader, Start, Guide, Game
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            