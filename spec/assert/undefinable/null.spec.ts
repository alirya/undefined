import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@alirya/boolean/assert/boolean.js';

it(`null`, () => {
    try {
        UndefinableParameters(null, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
