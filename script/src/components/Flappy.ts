import {CANVAS_HEIGHT, CANVAS_WIDTH, SOLID_COLOR, GRAVITY_ACCELERATION,
    JUMP_SPEED} from '../common/constants';
import VisualComponent from '../abstracts/VisualComponent';

class Flappy extends VisualComponent<Flappy> {
    
    private _speed: number;

    constructor() {
        super(30, 30, 100, CANVAS_HEIGHT/2);
        this._speed = 0;

        this.init();
    }

    get speed(): number { return this._speed; }

    private move(): void {
        this._speed = this._speed 
                       + GRAVITY_ACCELERATION;
        this.posY = this.posY 
                    + this._speed
                    - GRAVITY_ACCELERATION
                    + (GRAVITY_ACCELERATION / 2);

        this.notify('move', this);
    }

    update(context: CanvasRenderingContext2D): void {
        this.move();
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;
        context.fillRect(this.posX, this.posY, this.width, this.height);
    }

    jump(event: MouseEvent): void {
        this._speed = JUMP_SPEED;

        this.notify('jump', this);
    }

    init(): void {
        window.addEventListener('mousedown', this.jump.bind(this));
    }
}

export default Flappy;