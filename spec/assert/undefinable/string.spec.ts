import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@axiona/boolean/assert/boolean.js';

it(`primitive`, () => {
    try {
        UndefinableParameters('str', Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        UndefinableParameters(new String('str'), Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
