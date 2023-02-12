import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {

    const value = null;
    expect(NotUndefinedParameters(value)).toBe(value);
});





