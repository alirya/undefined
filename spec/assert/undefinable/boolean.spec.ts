import {UndefinableParameters} from '../../../dist/assert/undefinable';
import Boolean from '@alirya/boolean/assert/boolean';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {
    let value = true;
    expect(UndefinableParameters(value, Boolean)).toBeUndefined();
    expect(value).toBeTrue();
});

it(`false`, () => {
    let value = false;
    expect(UndefinableParameters(value, Boolean)).toBeUndefined();
    expect(value).toBeFalse();
});

