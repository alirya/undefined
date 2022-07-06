import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    let value = 1;
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`float`, () => {

    let value = 1.1;
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`infinity`, () => {

    let value = Infinity;
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`Nan`, () => {

    let value = NaN;
    expect(NotUndefinedParameters(value)).toEqual(value);
});

