import { BoundingBox } from './BoundingBox'

export class Collidable {

	private _boundingBox : BoundingBox

	get boundingBox() : BoundingBox {
		return this._boundingBox
	}

	isCollidingWith(object : Collidable) : boolean {
		return object.boundingBox.isOverlapping(this._boundingBox)
	}
}