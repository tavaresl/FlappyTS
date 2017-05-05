import Constants from './common/constants';
import World from './World';

class Game {

    private _gameArea: HTMLElement;
    private _gameCanvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _world: World;

    constructor() {
        this._gameArea = document.getElementById('game_area');
        this._gameCanvas = document.createElement('canvas');

        this._gameCanvas.id = 'game_canvas';
        this._gameCanvas.width = Constants.CANVAS_WIDTH;
        this._gameCanvas.height = Constants.CANVAS_HEIGHT;
        this._gameArea.insertBefore(this._gameCanvas, this._gameArea.firstChild);
        
        this._context = this._gameCanvas.getContext('2d');
        this._world = new World();

        this.init();
    }

    init() : void {
        this._world.draw(this._context);
    }
}

export default Game;