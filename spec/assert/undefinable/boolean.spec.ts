import {UndefinableParameters} from '../../../dist/assert/undefinable.js';
import Boolean from '@alirya/boolean/assert/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {
    const value = true;
    expect(UndefinableParameters(value, Boolean)).toBeUndefined();
    expect(value).toBeTrue();
});

it(`false`, () => {
    const value = false;
    expect(UndefinableParameters(value, Boolean)).toBeUndefined();
    expect(value).toBeFalse();
});

