import Validatable from "../../dist/validatable/undefined-parameters";
import StringMessage from "../../dist/assert/string/undefined-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});


describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validatable(<unknown>undefined, StringMessage);

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

        let validatable = Validatable(<unknown>{}, StringMessage);

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

        let validatable = Validatable(<unknown>1, StringMessage);

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

    let validatable = Validatable(undefined, StringMessage);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(undefined);
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validatable = Validatable(11, StringMessage);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(11);
    expect(typeof validatable.message).toBe("string");

});



