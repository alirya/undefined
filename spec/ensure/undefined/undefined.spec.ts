import {UndefinedParameters} from '../../../dist/ensure/undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    let value = undefined;
    UndefinedParameters(value);
    expect(value).toBeUndefined();
});





