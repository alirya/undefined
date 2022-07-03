import {UndefinableParameters} from '../../../dist/ensure/undefinable';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean';

it(`undefined `, () => {

    let value = undefined;
    expect(UndefinableParameters(value, BooleanParameters)).toBeUndefined();
    expect(value).toBeUndefined();
});
