import { Observable } from './Observable'
import { Handler } from './Handler'

export class Component implements Observable {

	private _handlers : Array<Handler>

	subscribe(event : string, callback : any) : void {
		this._handlers.push(new Handler(event, callback))
	}

	unsubscribe(event : string, callback : any) : boolean {
		this._handlers = this._handlers.filter(handler => {
			return handler.event != event && handler.callback != callback
		})
		
		return true
	}

	notify(event : string, context : Object = this) : void {
		this._handlers.filter(handler => handler.event == event)
						.forEach(handler => handler.callback(context))
	}
}