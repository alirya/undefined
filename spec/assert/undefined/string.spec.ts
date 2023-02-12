import Undefined from '../../../dist/assert/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    try {
        Undefined('str');
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        Undefined(new String('str'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});






