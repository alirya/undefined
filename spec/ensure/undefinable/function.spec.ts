import Undefinable from "../../../dist/ensure/undefinable-parameters";
import Boolean from "@dikac/t-boolean/ensure/boolean-parameters";

it(`anonymous `, () => {
    try {
        Undefinable(function () {}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        Undefinable(()=>{}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        Undefinable(isNaN, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
