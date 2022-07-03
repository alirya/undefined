import {UndefinableParameters} from '../../../dist/assert/undefinable';
import Boolean from '@alirya/boolean/assert/boolean';

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
