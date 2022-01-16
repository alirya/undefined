import NotUndefined from '../../../dist/ensure/not-undefined-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    let value = function () {};
    expect(NotUndefined(value)).toBe(value);
});

it(`anonymous arrow`, () => {
   let value = ()=>{};
    expect(NotUndefined(value)).toBe(value);
});

it(`named`, () => {
    let value = isNaN;
    expect(NotUndefined(value)).toBe(value);
});








