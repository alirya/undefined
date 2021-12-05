import Undefinable from "../../../dist/assert/undefinable-parameters";
import Boolean from "@dikac/t-boolean/assert/boolean";

it(`primitive`, () => {
    try {
        Undefinable('str', Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        Undefinable(new String('str'), Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
