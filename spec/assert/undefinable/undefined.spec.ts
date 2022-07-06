import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@alirya/boolean/assert/boolean.js';

it(`undefined `, () => {

    let value = undefined;
    expect(UndefinableParameters(value, Boolean)).toBeUndefined();
    expect(value).toBeUndefined();
});
