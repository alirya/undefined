import NotUndefined from "../../../dist/ensure/not-undefined-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {

    let value = null;
    expect(NotUndefined(value)).toBe(value);
});





