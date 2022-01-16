import NotUndefined from '../../../dist/assert/not-undefined';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    expect(NotUndefined(function () {})).toBeUndefined();
});

it(`anonymous arrow`, () => {
    expect(NotUndefined(()=>{})).toBeUndefined();
});

it(`named`, () => {
    expect(NotUndefined(isNaN)).toBeUndefined();
});








