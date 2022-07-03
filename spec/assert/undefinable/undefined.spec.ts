import {UndefinableParameters} from '../../../dist/assert/undefinable';
import Boolean from '@alirya/boolean/assert/boolean';

it(`undefined `, () => {

    let value = undefined;
    expect(UndefinableParameters(value, Boolean)).toBeUndefined();
    expect(value).toBeUndefined();
});
