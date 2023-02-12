import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    const value = 1;
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`float`, () => {

    const value = 1.1;
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`infinity`, () => {

    const value = Infinity;
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`Nan`, () => {

    const value = NaN;
    expect(NotUndefinedParameters(value)).toEqual(value);
});

