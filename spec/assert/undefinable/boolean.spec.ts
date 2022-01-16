import Undefinable from '../../../dist/assert/undefinable-parameters';
import Boolean from '@alirya/boolean/assert/boolean';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {
    let value = true;
    expect(Undefinable(value, Boolean)).toBeUndefined();
    expect(value).toBeTrue();
});

it(`false`, () => {
    let value = false;
    expect(Undefinable(value, Boolean)).toBeUndefined();
    expect(value).toBeFalse();
});

