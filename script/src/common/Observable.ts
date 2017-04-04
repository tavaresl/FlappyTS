export interface Observable {
	subscribe(event : string, callback : any) : void
	unsubscribe(event : string, callback : any) : boolean
	notify(event : string, context : object) : void
}