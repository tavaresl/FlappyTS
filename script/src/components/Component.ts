import { callback } from '../common/types';
import Handler from '../common/Handler';
import Observable from '../common/Observable';

abstract class Component implements Observable {

    private _handlers: Array<Handler> = [];

    register(event: string, callback: callback): void {
        this._handlers.push(new Handler(event, callback));
    }

    unregister(event: string, callback: callback): void {
        this._handlers = this._handlers.filter((handler) => {
            return handler.event != event || handler.callback != callback;
        });
    }

    notify(event: string, context): void {
        this._handlers
            .filter((handler) => handler.event == event)
            .forEach((handler) => handler.callback(context));
    }
}

export default Component;