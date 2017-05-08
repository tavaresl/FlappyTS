import { callback } from '../common/types';
import Handler from '../common/Handler';
import Observable from '../common/Observable';

abstract class Component<T> implements Observable<T> {

    private _handlers: Handler<T>[] = [];

    constructor() {
        this._handlers = [];
    }

    register(event: string, callback: callback<T>): void {
        this._handlers.push(new Handler(event, callback));
    }

    unregister(event: string, callback: callback<T>): void {
        this._handlers = this._handlers.filter((handler) => {
            return handler.event != event || handler.callback != callback;
        });
    }

    notify(event: string, context: T): void {
        this._handlers
            .filter((handler) => handler.event == event)
            .forEach((handler) => handler.callback(context));
    }
}

export default Component;