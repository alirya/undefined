import Undefinable from "../../../dist/ensure/undefinable-parameters";
import Boolean from "@alirya/boolean/ensure/boolean-parameters";

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
