import Undefined from '../../../dist/assert/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {
    try {
        Undefined(null);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





