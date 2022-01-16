import Undefinable from '../../../dist/ensure/undefinable-parameters';
import Boolean from '@alirya/boolean/ensure/boolean-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it(`integer`, () => {

    try {
        Undefinable(1, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`float`, () => {
    try {
        Undefinable(1.1, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`infinity`, () => {

    try {
        Undefinable(Infinity, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`Nan`, () => {

    try {
        Undefinable(NaN, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


