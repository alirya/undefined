import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {

    let value = 'str';
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`object`, () => {

    let value = new String('str');
    expect(NotUndefinedParameters(value)).toBe(value);
});






