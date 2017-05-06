import Constants from './common/constants';

class Flappy {

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
        this._width = 30;
        this._height = 30;
        this._rotation = 0;
        this._speed = 0;
        this._backgroundColor = Constants.SOLID_COLOR;
        this._acceleration = 0;
        this._posX = 100;
        this._posY = Constants.CANVAS_HEIGHT / 2;
        
        console.log(this);

        this.init();
    }

    get width(): number { return this._width; }
    get height(): number { return this._width; }
    get rotation(): number { return this._rotation; }
    get speed(): number { return this._speed; }
    get acceleration():number { return this._acceleration; }
    get isJumping(): boolean { return this._jumping; }

    set jumping(jumping: boolean) { this._jumping = jumping; }

    private move(): void {
        let dAcceleration = Constants.GRAVITY_ACCELERATION;
        
        if (this._acceleration > 0) {
            dAcceleration = Constants.GRAVITY_ACCELERATION - this._acceleration;
        }
        else {
            this._acceleration = 0;
        }

        this._speed = this._speed 
                       + dAcceleration;
        this._posY = this._posY 
                    + this._speed 
                    - Constants.GRAVITY_ACCELERATION 
                    + (Constants.GRAVITY_ACCELERATION / 2);

        this._acceleration = dAcceleration;
    }

    update(context: CanvasRenderingContext2D): void {
        this.move();
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this._backgroundColor;
        context.fillRect(this._posX, this._posY, this._width, this._height);
    }

    init(): void {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.keyCode == 32) {
                this._acceleration = Constants.JUMP_FORCE;
            }
        });
    }
}

export default Flappy;