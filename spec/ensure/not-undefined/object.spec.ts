import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {

    let value = {};
    expect(NotUndefinedParameters(value)).toBe(value);
});

it(`instance`, () => {

    let value = new Map();
    expect(NotUndefinedParameters(value)).toBe(value);
});


