import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@axiona/boolean/assert/boolean.js';

it(`anonymous `, () => {
    try {
        UndefinableParameters(function () {}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        UndefinableParameters(()=>{}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        UndefinableParameters(isNaN, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
