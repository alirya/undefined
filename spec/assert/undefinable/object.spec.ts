import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@axiona/boolean/assert/boolean.js';

it(`plain`, () => {
    try {
        UndefinableParameters({}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        UndefinableParameters(new Map(), Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
