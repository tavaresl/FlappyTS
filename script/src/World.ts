import { CANVAS_WIDTH, CANVAS_HEIGHT, BACKGROUND_COLOR } from './common/constants';

class World {

    private _width: number;
    private _height: number;
    private _backgroundColor: string;
    
    constructor() {
        this._width = CANVAS_WIDTH;
        this._height = CANVAS_HEIGHT;
        this._backgroundColor = BACKGROUND_COLOR;
    }

    get width(): number { return this._width; }
    get height(): number { return this._height; }
    get backgroundColor() : string { return this._backgroundColor; }

    set width(width: number) { this._width = width; }
    set height(height: number) { this._height = height; }
    set backgroundColor(color: string) { this._backgroundColor = color; }

    init(): void {}

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this._backgroundColor;
        context.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        context.fill();
    }

    update(context: CanvasRenderingContext2D): void {
        
    }
}

export default World;