import { Component } from './Component'
import { Collidable } from './Collidable'

export class BoundingBox extends Component {
	
	private _originX : number
	private _originY : number
	private _endX : number
	private _endY : number
	private _paddingTop : number;
	private _paddingRight : number;
	private _paddingBottom : number;
	private _paddingLeft : number;

	constructor(padding?) {
		super()

		if (padding) {
			this.padding = padding;
		}
		else {
			this.padding = 0;
		}
	}

	set paddingTop(value : number) {
		this._paddingTop = value
	}

	set paddingRight(value : number) {
		this._paddingRight = value
	}

	set paddingBottom(value : number) {
		this._paddingBottom = value
	}

	set paddingLeft(value : number) {
		this._paddingLeft = value
	}

	set padding(value : number) {
		this._paddingTop 	= value
		this._paddingRight 	= value
		this._paddingLeft 	= value
		this._paddingBottom = value
	}

	get base() : number {
		const BASE = (this._paddingLeft + this._originX) - (this._endX + this._paddingRight)
		return Math.abs(BASE)
	}

	get height() : number {
		const HEIGHT = (this._paddingTop + this._originY) - (this._endY + this._paddingBottom)
		return Math.abs(HEIGHT)
	}

	isCollidingWith(target : Collidable) : boolean{

		return false
	}
}