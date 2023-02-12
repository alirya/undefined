import NotUndefined from '../../../dist/assert/not-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    try {

        const value = undefined;
        NotUndefined(value);
        expect(value).toBeUndefined();
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});





