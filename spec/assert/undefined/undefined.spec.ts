import Undefined from '../../../dist/assert/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    let value = undefined;
    Undefined(value);
    expect(value).toBeUndefined();
});





