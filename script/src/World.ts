import Constants from './common/constants';

class World {

    private _width: number;
    private _height: number;
    private _backgroundColor: string;
    
    constructor() {
        this._width = Constants.CANVAS_WIDTH;
        this._height = Constants.CANVAS_HEIGHT;
    }

    get width() : number { return this._width; }
    get height() : number { return this._height; }
    get backgroundColor() : string { return this._backgroundColor; }

    set width(width: number) { this._width = width; }
    set height(height: number) { this._height = height; }
    set backgroundColor(color: string) { this._backgroundColor = color; }

    draw(context: CanvasRenderingContext2D) : void {
        context.fillStyle = this._backgroundColor;
        context.rect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);
        context.fill();
    }

    init() : void {}
}

export default World;