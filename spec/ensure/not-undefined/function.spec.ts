import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    const value = function () {};
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`anonymous arrow`, () => {
   const value = ()=>{};
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`named`, () => {
    const value = isNaN;
    expect(NotUndefinedParameters(value)).toBe(value);
});








