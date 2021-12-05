import Undefined_ from "../../../dist/assert/string/undefined-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(Undefined_({}, true,  'value')).toBe(
        'value is undefined.'
    );

});

it('false', ()=>{

    expect(Undefined_({}, false,  'value')).toBe(
        'value must undefined, actual object.'
    );

});
