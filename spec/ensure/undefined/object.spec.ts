import {UndefinedParameters} from '../../../dist/ensure/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {
    try {
        UndefinedParameters({});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        UndefinedParameters(new Map());
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});







