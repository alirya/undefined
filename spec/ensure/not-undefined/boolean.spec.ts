import {NotUndefinedParameters} from '../../../dist/ensure/not-undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     NotUndefinedParameters(true);
});

it(`false`, () => {

     NotUndefinedParameters(false);
});

