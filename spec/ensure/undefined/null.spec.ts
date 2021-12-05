import Undefined from "../../../dist/ensure/undefined-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {
    try {
        Undefined(null);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





