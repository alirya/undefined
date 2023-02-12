import {UndefinedParameters} from '../../dist/validator/undefined.js';
import StringMessage from '../../dist/assert/string/undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validator = UndefinedParameters(StringMessage.Parameters);
        const validatable = validator(<unknown>undefined);

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

        const validator = UndefinedParameters(StringMessage.Parameters);
        const validatable = validator({});

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

        const validator = UndefinedParameters(StringMessage.Parameters);
        const validatable = validator('1');

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.value = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

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

    const validator = UndefinedParameters(StringMessage.Parameters);
    const validatable = validator(undefined);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(undefined);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    const validator = UndefinedParameters(StringMessage.Parameters);
    const validatable = validator(1);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');

});



