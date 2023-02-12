import {NotUndefinedParameters} from '../../dist/validatable/not-undefined.js';
import StringMessage from '../../dist/assert/string/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validatable = NotUndefinedParameters(<unknown>{}, StringMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            const string : unknown = validatable.value;
            expect(string).toEqual({});

        } else {

            const string : undefined = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        const validatable = NotUndefinedParameters(<unknown>undefined, StringMessage.Parameters);

        if(validatable.valid) {

            // @ts-expect-error
            const string : undefined = validatable.value;
            fail('validatable.valid should false');

        } else {


            const string : undefined = validatable.value;
            expect(string).toEqual(undefined);
        }
    });

    it(`readonly`,function() {

        const validatable = NotUndefinedParameters(<unknown>1, StringMessage.Parameters);

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    const validatable = NotUndefinedParameters(undefined, StringMessage.Parameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(undefined);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    const validatable = NotUndefinedParameters(11, StringMessage.Parameters);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(11);
    expect(typeof validatable.message).toBe('string');

});



