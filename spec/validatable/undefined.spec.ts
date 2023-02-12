import {UndefinedParameters} from '../../dist/validatable/undefined.js';
import StringMessage from '../../dist/assert/string/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validatable = UndefinedParameters(<unknown>undefined, StringMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            const string : undefined = validatable.value;
            expect(string).toBe(undefined);

        } else {

            // @ts-expect-error
            const string : undefined = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        const validatable = UndefinedParameters(<unknown>{}, StringMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            const string : undefined = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            const string : undefined = validatable.value;
            // @ts-expect-error
            expect(string).toEqual({});
        }
    });

    it(`readonly`,function() {

        const validatable = UndefinedParameters(<unknown>1, StringMessage.Parameters);

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

    const validatable = UndefinedParameters(undefined, StringMessage.Parameters);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(undefined);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    const validatable = UndefinedParameters(11, StringMessage.Parameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(11);
    expect(typeof validatable.message).toBe('string');

});



