import Undefined from "../../dist/validator/undefined-parameters";
import StringMessage from "../../dist/assert/string/undefined-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = Undefined(StringMessage);
        let validatable = validator(<unknown>undefined);

        if(validatable.valid) {

            // compiler pass
            let string : undefined = validatable.value;
            expect(string).toBe(undefined);

        } else {

            // @ts-expecerror
            let string : undefined = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validator = Undefined(StringMessage);
        let validatable = validator({});

        if(validatable.valid) {

            // compiler pass
            let string : undefined = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expecerror
            let string : undefined = validatable.value;
            // @ts-expecerror
            expect(string).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = Undefined(StringMessage);
        let validatable = validator('1');

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expecerror
            validatable.value = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

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

    let validator = Undefined(StringMessage);
    let validatable = validator(undefined);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(undefined);
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validator = Undefined(StringMessage);
    let validatable = validator(1);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe("string");

});



