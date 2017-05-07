import {CANVAS_WIDTH, CANVAS_HEIGHT} from '../common/constants';
import World from './World';
import Flappy from './Flappy';

class Game {

    private _gameArea: HTMLElement;
    private _gameCanvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _world: World;
    private _flappy: Flappy;
    private _animationFrame: any;
    private _gameState: number;

    constructor() {
        this._gameArea = document.getElementById('game_area');
        this._gameCanvas = document.createElement('canvas');
        this._context = this._gameCanvas.getContext('2d');

        this._gameCanvas.id = 'game_canvas';
        this._gameCanvas.width = CANVAS_WIDTH;
        this._gameCanvas.height = CANVAS_HEIGHT;
        this._gameArea.insertBefore(this._gameCanvas, this._gameArea.firstChild);

        this._world = new World();
        this._flappy = new Flappy();

        this.init();
    }

    update(): void {
        this._world.update(this._context);
        this._flappy.update(this._context);
        
        this.draw();
    }

    draw(): void {
        this._world.draw(this._context);
        this._flappy.draw(this._context);

        if (this._gameState == 1) {
            window.requestAnimationFrame(this.update.bind(this));
        }
    }

    init(): void {
        console.info(`Starting game...`);

        this.registerObservers();
        this._gameState = 1;
        this._world.draw(this._context);
        this._animationFrame = window.requestAnimationFrame(this.update.bind(this));

        console.info(`Game has started.`);
    }

    registerObservers(): void {
        this._flappy.register('move', (context) => {
            if (context.posY >= CANVAS_HEIGHT - 30) {
                this.endGame();
            }
        });

        this._flappy.register('jump', (context) => {
            console.log(`Flappy has jumped at position ${this._flappy.posY}.`);
        });
    }

    endGame(): void {
        this._gameState = 2;
        this._flappy.posY = CANVAS_HEIGHT - 30;

        const DATE = new Date();

        console.info(`Game has ended.`);
    }
}

export default Game;