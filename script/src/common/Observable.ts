import { callback } from './types';

interface Observable {

    register(event: string, callback: callback): void;
    unregister(event: string, callback: callback): void;
    notify(event: string, context: Object): void;
}

export default Observable;