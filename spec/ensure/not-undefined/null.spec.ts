import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {

    let value = null;
    expect(NotUndefinedParameters(value)).toBe(value);
});





