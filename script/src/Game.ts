import {CANVAS_WIDTH, CANVAS_HEIGHT} from './common/constants';
import World from './World';
import Flappy from './Flappy';

class Game {

    private _gameArea: HTMLElement;
    private _gameCanvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _world: World;
    private _flappy: Flappy;
    private _animationFrame: any;

    constructor() {
        this._gameArea = document.getElementById('game_area');
        this._gameCanvas = document.createElement('canvas');

        this._gameCanvas.id = 'game_canvas';
        this._gameCanvas.width = CANVAS_WIDTH;
        this._gameCanvas.height = CANVAS_HEIGHT;
        this._gameArea.insertBefore(this._gameCanvas, this._gameArea.firstChild);

        this._context = this._gameCanvas.getContext('2d');
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

        window.requestAnimationFrame(this.update.bind(this));
    }

    init(): void {
        this._world.draw(this._context);

        this._animationFrame = window.requestAnimationFrame(this.update.bind(this));
    }
}

export default Game;