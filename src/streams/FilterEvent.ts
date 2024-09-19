// import the correct member from the module
import { checkIfLogEvent } from '@testla/screenplay/dist/utils';

// or remove the import statement if it is not needed
import { Transform, TransformCallback } from 'stream';

export class FilterEventStream extends Transform {
    // eslint-disable-next-line no-underscore-dangle
    _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void {
        const str = chunk.toString();
        if (checkIfLogEvent(str)) {
            this.push(chunk);
        }
        callback();
    }
}
