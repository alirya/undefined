import NotUndefined from '../../dist/validator/not-undefined-parameters';
import StringMessage from '../../dist/assert/string/not-undefined-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = NotUndefined(StringMessage);
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

        let validator = NotUndefined(StringMessage);
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

        let validator = NotUndefined(StringMessage);
        let validatable = validator('1');

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expecerror
        validatable.value = true;

        try {
            // @ts-expecerror
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = NotUndefined(StringMessage);
    let validatable = validator(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');
});

it(`invalid`,function() {

    let validator = NotUndefined(StringMessage);
    let validatable = validator(undefined);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(undefined);
    expect(typeof validatable.message).toBe('string');
});



