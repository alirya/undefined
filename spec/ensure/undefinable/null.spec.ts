import Undefinable from "../../../dist/ensure/undefinable-parameters";
import Boolean from "@dikac/t-boolean/ensure/boolean-parameters";

it(`null`, () => {
    try {
        Undefinable(null, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
