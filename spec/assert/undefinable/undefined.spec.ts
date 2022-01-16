import Undefinable from '../../../dist/assert/undefinable-parameters';
import Boolean from '@alirya/boolean/assert/boolean';

it(`undefined `, () => {

    let value = undefined;
    expect(Undefinable(value, Boolean)).toBeUndefined();
    expect(value).toBeUndefined();
});
