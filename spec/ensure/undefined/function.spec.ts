import Undefined from "../../../dist/ensure/undefined-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    try {
        Undefined(function () {});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        Undefined(()=>{});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        Undefined(isNaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});








