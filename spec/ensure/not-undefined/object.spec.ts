import NotUndefined from "../../../dist/ensure/not-undefined-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {

    let value = {};
    expect(NotUndefined(value)).toBe(value);
});

it(`instance`, () => {

    let value = new Map();
    expect(NotUndefined(value)).toBe(value);
});


