import {UndefinableParameters} from '../../../dist/ensure/undefinable.js';
import Boolean from '@alirya/boolean/assert/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    let value = true;
    expect(UndefinableParameters(value, Boolean)).toBe(value);
    expect(value).toBeTrue();
});

it(`false`, () => {

    let value = false;
    expect(UndefinableParameters(value, Boolean)).toBe(value);
    expect(value).toBeFalse();
});

