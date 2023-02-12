import {UndefinableParameters} from '../../../dist/ensure/undefinable.js';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean.js';

it(`primitive`, () => {
    try {
        UndefinableParameters('str', BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        UndefinableParameters(new String('str'), BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
