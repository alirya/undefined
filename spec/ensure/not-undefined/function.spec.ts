import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    let value = function () {};
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`anonymous arrow`, () => {
   let value = ()=>{};
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`named`, () => {
    let value = isNaN;
    expect(NotUndefinedParameters(value)).toBe(value);
});








