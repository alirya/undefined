import {UndefinableParameters} from '../../../dist/ensure/undefinable.js';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean.js';

it(`undefined `, () => {

    let value = undefined;
    expect(UndefinableParameters(value, BooleanParameters)).toBeUndefined();
    expect(value).toBeUndefined();
});
