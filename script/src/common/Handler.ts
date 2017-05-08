import { callback } from './types';

class Handler<T> {

    private _event: string;
    private _callback: callback<T>;

    constructor(event: string, callback: callback<T>) {
        this._event = event;
        this._callback = callback;
    }

    get event(): string { return this._event; }
    get callback(): callback<T> { return this._callback }
}

export default Handler;