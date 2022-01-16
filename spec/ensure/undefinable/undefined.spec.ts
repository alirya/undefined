import Undefinable from '../../../dist/ensure/undefinable-parameters';
import Boolean from '@alirya/boolean/ensure/boolean-parameters';

it(`undefined `, () => {

    let value = undefined;
    expect(Undefinable(value, Boolean)).toBeUndefined();
    expect(value).toBeUndefined();
});
