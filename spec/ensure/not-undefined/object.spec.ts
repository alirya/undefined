import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {

    const value = {};
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`instance`, () => {

    const value = new Map();
    expect(NotUndefinedParameters(value)).toBe(value);
});


