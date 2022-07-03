import {NotUndefinedParameters} from '../../dist/validator/not-undefined';
import StringMessage from '../../dist/assert/string/not-undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = NotUndefinedParameters(StringMessage.Parameters);
        let validatable = validator(<unknown>{});

        if(validatable.valid) {

            // compiler pass
            let string : unknown = validatable.value;
            expect(string).toEqual({});

        } else {

            let string : undefined = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validator = NotUndefinedParameters(StringMessage.Parameters);
        let validatable = validator(undefined);

        if(validatable.valid) {

            let string : undefined = validatable.value;
            fail('validatable.valid should false');

        } else {

            let string : undefined = validatable.value;
            expect(string).toEqual(undefined);
        }
    });

    it(`readonly`,function() {

        let validator = NotUndefinedParameters(StringMessage.Parameters);
        let validatable = validator('1');

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

    let validator = NotUndefinedParameters(StringMessage.Parameters);
    let validatable = validator(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');
});

it(`invalid`,function() {

    let validator = NotUndefinedParameters(StringMessage.Parameters);
    let validatable = validator(undefined);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(undefined);
    expect(typeof validatable.message).toBe('string');
});



