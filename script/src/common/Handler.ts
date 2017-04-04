type callback = (ctx : any) => void

export class Handler {
	constructor(
		private _event : string, 
		private _callback : callback) {}

	get event() {
		return this._event;
	}

	get callback() {
		return this._callback
	}
}