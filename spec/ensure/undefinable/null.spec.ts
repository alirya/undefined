import {UndefinableParameters} from '../../../dist/ensure/undefinable.js';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean.js';

it(`null`, () => {
    try {
        UndefinableParameters(null, BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
