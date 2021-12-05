import Undefinable from "../../../dist/ensure/undefinable-parameters";
import Boolean from "@dikac/t-boolean/ensure/boolean-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('union', () => {

    let target : undefined|boolean = <any>true;

    try {

        Undefinable(target, Boolean)

        let undefinable : boolean|undefined = target;
        // @ts-expect-error
        let undefined : undefined = target;
        // @ts-expect-error
        let boolean : boolean = target;

    } catch (e) {

    }
});
