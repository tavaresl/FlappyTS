import { callback } from './types';

class Handler {

    private _event: string;
    private _callback: callback;

    constructor(event: string, callback: callback) {
        this._event = event;
        this._callback = callback;
    }

    get event(): string { return this._event; }
    get callback(): callback { return this._callback }
}

export default Handler;