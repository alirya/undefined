import Undefined from "../../../dist/ensure/undefined-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    try {
        Undefined('str');
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        Undefined(new String('str'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});






