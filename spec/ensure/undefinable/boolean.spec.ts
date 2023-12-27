import {UndefinableParameters} from '../../../dist/ensure/undefinable.js';
import Boolean from '@axiona/boolean/assert/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    const value = true;
    expect(UndefinableParameters(value, Boolean)).toBe(value);
    expect(value).toBeTrue();
});

it(`false`, () => {

    const value = false;
    expect(UndefinableParameters(value, Boolean)).toBe(value);
    expect(value).toBeFalse();
});

