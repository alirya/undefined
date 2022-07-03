import {UndefinedParameters} from '../../../dist/ensure/undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    try {
        UndefinedParameters(1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`float`, () => {
    try {
        UndefinedParameters(1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`infinity`, () => {

    try {
        UndefinedParameters(Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`Nan`, () => {

    try {
        UndefinedParameters(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

