import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@axiona/boolean/assert/boolean.js';

it(`undefined `, () => {

    const value = undefined;
    expect(UndefinableParameters(value, Boolean)).toBeUndefined();
    expect(value).toBeUndefined();
});
