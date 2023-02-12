import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {

    const value = 'str';
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`object`, () => {

    const value = new String('str');
    expect(NotUndefinedParameters(value)).toBe(value);
});






