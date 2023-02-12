import {UndefinedParameters} from '../../../dist/ensure/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    const value = undefined;
    UndefinedParameters(value);
    expect(value).toBeUndefined();
});





