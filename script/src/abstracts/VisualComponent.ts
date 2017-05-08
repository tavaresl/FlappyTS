import Component from './Component';

class VisualComponent<T> extends Component<T> {

    private _width: number;
    private _height: number;
    private _posX: number;
    private _posY: number;
    private _color: string;
    private _rotation: number;

    constructor(width: number, height: number, posX: number, posY: number,
        color: string = '#FFFFFF') {
        
        super();

        this._width = width;
        this._height = height;
        this._posX = posX;
        this._posY = posY;
        this._color = color;
        this._rotation = 0;
    }
    
    get width(): number { return this._width; }
    get height(): number { return this._width; }
    get posX(): number { return this._posX; }
    get posY(): number { return this._posY; }
    get color(): string { return this._color; }
    get rotation(): number { return this._rotation; }
    
    set width(width: number) { this._width = width; }
    set height(height: number) { this._width = height; }
    set posX(posX: number) { this._posX = posX; }
    set posY(posY: number) { this._posY = posY; }
    set color(color: string) { this._color = color; }
    set rotation(rotation: number) { this._rotation = rotation; }
}

export default VisualComponent;