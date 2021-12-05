import Undefinable from "../../../dist/assert/undefinable-parameters";
import Boolean from "@dikac/t-boolean/assert/boolean";

it(`plain`, () => {
    try {
        Undefinable({}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        Undefinable(new Map(), Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
