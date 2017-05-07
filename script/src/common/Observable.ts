import { callback } from './types';

interface Observable<T> {

    register(event: string, callback: callback<T>): void;
    unregister(event: string, callback: callback<T>): void;
    notify(event: string, context: T): void;
}

export default Observable;