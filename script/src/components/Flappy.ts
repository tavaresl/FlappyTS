import {CANVAS_HEIGHT, CANVAS_WIDTH, SOLID_COLOR, GRAVITY_ACCELERATION,
    JUMP_SPEED} from '../common/constants';
import Component from './Component';

class Flappy extends Component {

    private _width: number;
    private _height: number;
    private _rotation: number;
    private _posX: number;
    private _posY: number;
    private _backgroundColor: string;
    private _speed: number;
    private _acceleration: number;
    private _jumping: boolean;

    constructor() {
        super();

        this._width = 30;
        this._height = 30;
        this._rotation = 0;
        this._speed = 0;
        this._backgroundColor = SOLID_COLOR;
        this._posX = 100;
        this._posY = CANVAS_HEIGHT / 2;

        this.init();
    }

    get width(): number { return this._width; }
    get height(): number { return this._width; }
    get rotation(): number { return this._rotation; }
    get speed(): number { return this._speed; }
    get acceleration():number { return this._acceleration; }

    private move(): void {
        this._speed = this._speed 
                       + GRAVITY_ACCELERATION;
        this._posY = this._posY 
                    + this._speed
                    - GRAVITY_ACCELERATION
                    + (GRAVITY_ACCELERATION / 2);

        this.notify('move');
    }

    update(context: CanvasRenderingContext2D): void {
        this.move();
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this._backgroundColor;
        context.fillRect(this._posX, this._posY, this._width, this._height);
    }

    jump(event: MouseEvent): void {
        this._speed = JUMP_SPEED;
    }

    init(): void {
        window.addEventListener('mousedown', this.jump.bind(this));
    }
}

export default Flappy;