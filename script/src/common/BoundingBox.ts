import { Component } from './Component'

export class BoundingBox extends Component {
	
	private _originX : number
	private _originY : number
	private _endX : number
	private _endY : number

	constructor() {
		super()
	}

	get base() : number {
		const DIFF = this._originX - this._endX
		return Math.abs(DIFF)
	}

	get height() : number {
		const DIFF = this._originY - this._endY
		return Math.abs(DIFF)
	}

	isOverlapping(other : BoundingBox) : boolean {
		if ((other._endX > this._originX && other._originX < this._endX)
		|| (other._endY > this._originY && other._originY < this._endY)) {
			return true
		}

		return false
	}
}