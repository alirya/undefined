import {UndefinableParameters} from '../../../dist/ensure/undefinable';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean';

it(`plain`, () => {
    try {
        UndefinableParameters({}, BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        UndefinableParameters(new Map(), BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
