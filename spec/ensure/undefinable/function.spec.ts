import {UndefinableParameters} from '../../../dist/ensure/undefinable';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean';

it(`anonymous `, () => {
    try {
        UndefinableParameters(function () {}, BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        UndefinableParameters(()=>{}, BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        UndefinableParameters(isNaN, BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
