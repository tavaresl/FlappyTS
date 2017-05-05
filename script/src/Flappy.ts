import Constants from './common/constants';

class Flappy {

	private _width: number;
	private _height: number;
	private _rotation: number;
	private _speed: number;

	constructor() {
		this._width = 30;
		this._height = 30;
		this._rotation = 0;
		this._speed = 0;
	}

	get width() : number { return this._width; }
	get height() : number { return this._width; }
	get rotation() : number { return this._rotation; }
	get speed() : number { return this._speed; }
}

export default Flappy;