import Undefined from "../../../dist/assert/undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('union', () => {


    let target : undefined|number = undefined;

    try {

        Undefined(target);

        // @ts-expect-error
        let number : number = target;
        let undefined : undefined = target;

    } catch (e) {

    }
});

describe('unknown', () => {

    let target : unknown = undefined;

    try {

        Undefined(target);

        let undefined : undefined = target;

    } catch (e) {

    }

});
